const fs = require("fs").promises;
const core = require("@actions/core");
const glob = require("glob");
const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;


async function run() {
	try {
		const schemaPath = "../features/schema.json";
		const schema = await fs.readFile(schemaPath, "utf8");
		const ajv = new Ajv();
		addFormats(ajv);
		ajv.addKeyword("options")
		const validator = ajv.compile(JSON.parse(schema));

		glob("../features/*.json", { ignore: [schemaPath] }, (err, files) => {
			files.map(async (path) => {

				const file = await fs.readFile(path, "utf8");
				const valid = validator(JSON.parse(file));

				if (!valid) {
					core.setFailed("Some tests failed validation of " + path);
					core.error(validator.errors);
				} else {
					core.setOutput("Successfully validated " + path);
				}
			});
		});
	} catch (error) {
		core.setFailed(error.message);
	}
}

run();
