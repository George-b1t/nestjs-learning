import { Module } from '@nestjs/common';
import { NoteModule } from './app/modules/note/note.module';
import { UserModule } from './app/modules/user/user.module';

@Module({
  imports: [UserModule, NoteModule]
})

export class AppModule {}
