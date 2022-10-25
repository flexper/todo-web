import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { customFetcher } from '../../react-query/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Language {
  En = 'EN',
  Fr = 'FR'
}

export type Mutation = {
  createTodo: Todo;
  deleteTodo: Todo;
  updateLanguage: User;
  updateTodo: Todo;
};


export type MutationCreateTodoArgs = {
  todoCreate: TodoCreate;
};


export type MutationDeleteTodoArgs = {
  todoId: Scalars['String'];
};


export type MutationUpdateLanguageArgs = {
  language: Language;
};


export type MutationUpdateTodoArgs = {
  todoId: Scalars['String'];
  todoUpdate: TodoUpdate;
};

export type Query = {
  getTodoById: Todo;
  getTodos: Array<Todo>;
  getUserMe: User;
};


export type QueryGetTodoByIdArgs = {
  todoId: Scalars['String'];
};

export type Todo = {
  id: Scalars['String'];
  status?: Maybe<TodoStatus>;
  text: Scalars['String'];
};

export type TodoCreate = {
  status?: InputMaybe<TodoStatus>;
  text: Scalars['String'];
};

export enum TodoStatus {
  Done = 'DONE',
  Wip = 'WIP'
}

export type TodoUpdate = {
  status?: InputMaybe<TodoStatus>;
  text: Scalars['String'];
};

export type User = {
  avatarUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lang: Language;
  twitchUsername?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type GetUserMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserMeQuery = { getUserMe: { id: string, avatarUrl?: string | null, username?: string | null, email?: string | null, lang: Language } };

export type CreateTodoMutationVariables = Exact<{
  todoCreate: TodoCreate;
}>;


export type CreateTodoMutation = { createTodo: { id: string } };

export type DeleteTodoMutationVariables = Exact<{
  todoId: Scalars['String'];
}>;


export type DeleteTodoMutation = { deleteTodo: { id: string } };

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { getTodos: Array<{ id: string, text: string, status?: TodoStatus | null }> };

export type UpdateTodoMutationVariables = Exact<{
  todoId: Scalars['String'];
  todoUpdate: TodoUpdate;
}>;


export type UpdateTodoMutation = { updateTodo: { id: string } };


export const GetUserMeDocument = `
    query getUserMe {
  getUserMe {
    id
    avatarUrl
    username
    email
    lang
  }
}
    `;
export const useGetUserMeQuery = <
      TData = GetUserMeQuery,
      TError = unknown
    >(
      variables?: GetUserMeQueryVariables,
      options?: UseQueryOptions<GetUserMeQuery, TError, TData>
    ) =>
    useQuery<GetUserMeQuery, TError, TData>(
      variables === undefined ? ['getUserMe'] : ['getUserMe', variables],
      customFetcher<GetUserMeQuery, GetUserMeQueryVariables>(GetUserMeDocument, variables),
      options
    );

useGetUserMeQuery.getKey = (variables?: GetUserMeQueryVariables) => variables === undefined ? ['getUserMe'] : ['getUserMe', variables];
;

export const CreateTodoDocument = `
    mutation createTodo($todoCreate: TodoCreate!) {
  createTodo(todoCreate: $todoCreate) {
    id
  }
}
    `;
export const useCreateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>) =>
    useMutation<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>(
      ['createTodo'],
      (variables?: CreateTodoMutationVariables) => customFetcher<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, variables)(),
      options
    );
export const DeleteTodoDocument = `
    mutation deleteTodo($todoId: String!) {
  deleteTodo(todoId: $todoId) {
    id
  }
}
    `;
export const useDeleteTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteTodoMutation, TError, DeleteTodoMutationVariables, TContext>) =>
    useMutation<DeleteTodoMutation, TError, DeleteTodoMutationVariables, TContext>(
      ['deleteTodo'],
      (variables?: DeleteTodoMutationVariables) => customFetcher<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, variables)(),
      options
    );
export const GetTodosDocument = `
    query getTodos {
  getTodos {
    id
    text
    status
  }
}
    `;
export const useGetTodosQuery = <
      TData = GetTodosQuery,
      TError = unknown
    >(
      variables?: GetTodosQueryVariables,
      options?: UseQueryOptions<GetTodosQuery, TError, TData>
    ) =>
    useQuery<GetTodosQuery, TError, TData>(
      variables === undefined ? ['getTodos'] : ['getTodos', variables],
      customFetcher<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, variables),
      options
    );

useGetTodosQuery.getKey = (variables?: GetTodosQueryVariables) => variables === undefined ? ['getTodos'] : ['getTodos', variables];
;

export const UpdateTodoDocument = `
    mutation updateTodo($todoId: String!, $todoUpdate: TodoUpdate!) {
  updateTodo(todoId: $todoId, todoUpdate: $todoUpdate) {
    id
  }
}
    `;
export const useUpdateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateTodoMutation, TError, UpdateTodoMutationVariables, TContext>) =>
    useMutation<UpdateTodoMutation, TError, UpdateTodoMutationVariables, TContext>(
      ['updateTodo'],
      (variables?: UpdateTodoMutationVariables) => customFetcher<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, variables)(),
      options
    );