import tags from "@/data/tags";
import {type QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('electron');
const slugs = {
  bridge: slug('bridge'),
};

const electronQuestionCollection: QuestionSection = {
  title: 'Electron',
  icon: 'fluent-emoji:dna',
  collection: [
    {
      name: 'Что такое IPC?',
      tags: [
        tags.middle,
        tags.fundamentals
      ],
      references: [
        {
          name: 'Electron Docs: IPC',
          link: 'https://www.electronjs.org/docs/latest/tutorial/ipc',
        }
      ],
      answer: [
        'Модуль межпроцессной связи (IPC) — это механизм, который позволяет обмениваться синхронными ' +
        'и асинхронными сообщениями между основным процессом и процессом рендеринга. ',
        'Связь модуля ipcMain осуществляется от основного процесса к процессу рендеринга, ' +
        'а связь модуля ipcRenderer осуществляется от процесса рендеринга к основному процессу.'
      ],
      slug: slugs.bridge,
    }
  ]
}

export default electronQuestionCollection;
