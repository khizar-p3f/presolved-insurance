// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Channel, Task, TaskTemplate, EmailMessage, Audit, Config, TenantConfig, ChatChannel } = initSchema(schema);

export {
  Channel,
  Task,
  TaskTemplate,
  EmailMessage,
  Audit,
  Config,
  TenantConfig,
  ChatChannel
};