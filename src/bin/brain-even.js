#!/usr/bin/env node
import { helloBrainEven, checkParity, giveYourName } from '..';

helloBrainEven();
const name = giveYourName();
const result = checkParity(name);
console.log(result);
