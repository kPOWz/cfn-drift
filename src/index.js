const AWS = require('aws-sdk');
const fetch = require('node-fetch');


AWS.config.setPromisesDependency(Promise)

const StackDriftStatus = [
    'DRIFTED',
    'NOT_CHECKED',
    'IN_SYNC',
    'UNKNOWN'
];
    
const DetectionStatus = [
    'DETECTION_COMPLETE',
    'DETECTION_FAILED',
    'DETECTION_IN_PROGRESS'
];

//need options pattern and class to hold them probably
//  stack name
// opts 
//  polling interval
//  error on drift (boolean)
const cf = new AWS.CloudFormation(awsOpts);

async function detectDrift(stackName, ) {

}

async function describeStackDriftDetectionStatus(stackDriftDetectionId, options) {

}

// detect drift 
// My module
module.exports.detectDrift = detectDrift;
module.exports.describeStackDriftDetectionStatus = describeStackDriftDetectionStatus;
module.exports = async function detectDriftAndWait(stackName, options) {
    await fetch
    
    //throw new Error('boom');
};