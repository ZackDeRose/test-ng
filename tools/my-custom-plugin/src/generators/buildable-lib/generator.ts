import { Tree } from '@nx/devkit';
import { BuildableLibGeneratorSchema } from './schema';

export async function buildableLibGenerator(
  tree: Tree,
  options: BuildableLibGeneratorSchema
) {
  const fileContents = `Hello ${options.name}!`;
  tree.write('hello.txt', fileContents);
}

export default buildableLibGenerator;
