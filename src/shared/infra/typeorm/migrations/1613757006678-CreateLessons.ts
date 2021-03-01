import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export default class CreateLessons1613757006678 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'lessons',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'order',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'duration',
          type: 'decimal',
          isNullable: false,
          default: 1,
        },
        {
          name: 'course_id',
          type: 'uuid',
          isNullable: false,
        },
        {
          name: 'video_id',
          type: 'varchar',
          isNullable: false,
          isUnique: true,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
      ]
    }))

    await queryRunner.createForeignKey('lessons', new TableForeignKey({
      name: 'CoursesLessons',
      columnNames: ['course_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'courses',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('lessons', 'CoursesLessons');

    await queryRunner.dropTable('lessons');
  }

}
