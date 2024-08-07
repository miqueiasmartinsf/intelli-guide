"use client";

import simpleRestProvider from "ra-data-simple-rest";
import { Admin, Resource } from "react-admin";

import { CategoryCreate } from "./category/create";
import { CategoryEdit } from "./category/edit";
import { CategoryList } from "./category/list";
import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";
import { ChallengeList } from "./challenge/list";
import { ChallengeOptionCreate } from "./challengeOption/create";
import { ChallengeOptionEdit } from "./challengeOption/edit";
import { ChallengeOptionList } from "./challengeOption/list";
import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";
import { LessonList } from "./lesson/list";
import { QuizCreate } from "./quiz/create";
import { QuizEdit } from "./quiz/edit";
import { QuizList } from "./quiz/list";

const dataProvider = simpleRestProvider("/api");

const App = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource
                name="categories"
                list={CategoryList}
                create={CategoryCreate}
                edit={CategoryEdit}
                recordRepresentation="title"
            />

            <Resource
                name="quizzes"
                list={QuizList}
                create={QuizCreate}
                edit={QuizEdit}
                recordRepresentation="title"
            />

            <Resource
                name="lessons"
                list={LessonList}
                create={LessonCreate}
                edit={LessonEdit}
                recordRepresentation="title"
            />

            <Resource
                name="challenges"
                list={ChallengeList}
                create={ChallengeCreate}
                edit={ChallengeEdit}
                recordRepresentation="question"
            />

            <Resource
                name="challengeOptions"
                list={ChallengeOptionList}
                create={ChallengeOptionCreate}
                edit={ChallengeOptionEdit}
                recordRepresentation="text"
                options={{ label: "Challenge Options" }}
            />
        </Admin>
    );
};

export default App;
