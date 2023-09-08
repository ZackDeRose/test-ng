import { Tree } from '@nx/devkit';
import { BuildableLibGeneratorSchema } from './schema';
import { UnitTestRunner, libraryGenerator } from '@nx/angular/generators';

export async function buildableLibGenerator(
  tree: Tree,
  options: BuildableLibGeneratorSchema
) {
  await libraryGenerator(tree, {
    buildable: true,
    name: options.name,
    unitTestRunner: UnitTestRunner.None,
    directory: `libs/buildable/${options.name}`,
  });
}

export default buildableLibGenerator;
