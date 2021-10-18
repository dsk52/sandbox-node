import { MigrationInterface, QueryRunner } from "typeorm";

export class alterBook1633531233103 implements MigrationInterface {
  name = "alterBook1633531233103";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`book\`.\`book\` CHANGE \`publish_date\` \`publishDate\` datetime NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`book\`.\`book\` CHANGE \`publishDate\` \`publish_date\` datetime NOT NULL`
    );
  }
}
