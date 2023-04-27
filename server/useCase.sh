#!/bin/bash

# Get the name of the use case from the command line argument
USE_CASE_NAME=$1

# Get the name of the module from the command line argument
MODULE_NAME=$2

# Replace hyphens with uppercase for use case name
USE_CASE_NAME_UPPERCASE=$(echo $USE_CASE_NAME | sed -r 's/(^|-)([a-z])/\U\2/g')

# Create the use case directory
mkdir -p src/modules/$MODULE_NAME/useCases/$USE_CASE_NAME

# Create the use case file
touch src/modules/$MODULE_NAME/useCases/$USE_CASE_NAME/${USE_CASE_NAME_UPPERCASE}UseCase.ts

# Create the controller file
touch src/modules/$MODULE_NAME/useCases/$USE_CASE_NAME/${USE_CASE_NAME_UPPERCASE}Controller.ts

# Add the basic structure for the use case file
echo "
interface ${USE_CASE_NAME_UPPERCASE}Props {
} 

export class ${USE_CASE_NAME_UPPERCASE}UseCase {
  async execute({}: ${USE_CASE_NAME_UPPERCASE}Props){}
}" >> src/modules/$MODULE_NAME/useCases/$USE_CASE_NAME/${USE_CASE_NAME_UPPERCASE}UseCase.ts

# Add the basic structure for the controller file
echo "import { ${USE_CASE_NAME_UPPERCASE}UseCase } from './${USE_CASE_NAME_UPPERCASE}UseCase';
import { Request, Response } from 'express';

export class ${USE_CASE_NAME_UPPERCASE}Controller {
  async handle(req: Request, res: Response){}
}" >> src/modules/$MODULE_NAME/useCases/$USE_CASE_NAME/${USE_CASE_NAME_UPPERCASE}Controller.ts
