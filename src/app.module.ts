import { Module } from '@nestjs/common';
import { AuthModule } from './app/modules/auth/auth.module';
import { NoteModule } from './app/modules/note/note.module';
import { UserModule } from './app/modules/user/user.module';

@Module({
  imports: [UserModule, NoteModule, AuthModule]
})

export class AppModule {}
