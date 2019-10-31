import { knex } from '@gqlapp/database-server-ts';

export default class VideoUpload {
  public videoUploads() {
    return knex.select();
  }
}
