import { useNextAuthProtected } from 'next-protected-auth';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../components/atoms/Button';
import { FormDevTools } from '../components/atoms/FormDevTool';
import { Input } from '../components/atoms/Input';
import { useCreateTodoMutation, useGetTodosQuery } from '../services/apis/gql/generated/graphql';
import { useInvalidateQueries } from '../services/apis/react-query/useInvalidateQueries';

const Todos = () => {
  const { isConnected } = useNextAuthProtected();
  const invalidateQueriues = useInvalidateQueries();
  const { data, isLoading: isLoadingData } = useGetTodosQuery(undefined, { enabled: isConnected });
  const { mutateAsync: mutateCreate, isLoading: isLoadingCreate } = useCreateTodoMutation();

  const isLoading = useMemo(() => isLoadingData || isLoadingCreate, [isLoadingCreate, isLoadingData]);

  const { register, handleSubmit, control } = useForm({
    mode: 'all',
  });

  const onSubmit = async (data) => {
    await mutateCreate({
      todoCreate: { text: data.text },
    });
    invalidateQueriues(['getTodos']);
  };

  return (
    <div className="m-auto w-max space-y-5 pt-5">
      <h1 className="text-2xl">TODO {isLoading ? 'loading ...' : ''}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input label={'text'} required register={register('text')} className="m-auto" />
        </div>

        <div className="flex items-center justify-center gap-2">
          <Button type="submit" isLoading={isLoading}>
            save
          </Button>
        </div>
      </form>

      <div className="space-y-3">
        <p>todo :</p>

        <div className="space-y-2">
          {data?.getTodos?.map(({ text, id }) => (
            <p key={id}>{text}</p>
          ))}
        </div>
      </div>

      <FormDevTools control={control} />
    </div>
  );
};

export default Todos;
