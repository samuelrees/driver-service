import {IPipelineConfigProps} from "../lib/PipelineConfigProps";
import {BuildSpecContent} from "./buildspec-content";

export const PipelineConfig: IPipelineConfigProps = {
    serviceName: 'driver-service',
    sourceStage: {
        repositoryName: 'driver-service'
    },
    buildStage: {
        ecrRepositoryName: 'driver-service',
        buildSpec: BuildSpecContent
    },
    deployStage: {
        dev: {
            clusterName: 'poc-infrastructure-cluster',
            vpcId: 'vpc-0d7bd4170a4ab4a5f',
            securityGroup: 'sg-09be28a47e7bd86cf'
        },
        prod: {
            clusterName: 'poc-infrastructure-cluster',
            vpcId: 'vpc-0d7bd4170a4ab4a5f',
            securityGroup: 'sg-09be28a47e7bd86cf'


        },
    },
    approvalStage: {
        notifyEmails: ['samuelr@ganz.com'],
        notifyTopic: 'arn:aws:sns:us-east-1:604009108246:Samuelr_Notify_Email'
    },
}