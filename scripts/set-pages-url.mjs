import fs from 'node:fs';
import YAML from 'yaml';
const repository = process.env.GITHUB_REPOSITORY;
if (!repository || !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository)) {
  throw new Error('GITHUB_REPOSITORY must identify the target repository.');
}
const [owner, name] = repository.split('/');
const config = YAML.parse(fs.readFileSync('quartz.config.yaml', 'utf8'));
const root = `${owner.toLowerCase()}.github.io`;
config.configuration.baseUrl = name.toLowerCase() === root ? root : `${root}/${name}`;
fs.writeFileSync('quartz.config.yaml', YAML.stringify(config));
console.log(`Publishing configuration: ${config.configuration.baseUrl}`);
