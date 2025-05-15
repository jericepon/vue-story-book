import TodoList from '@/components/TodoList.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof TodoList> = {
  title: 'Components/TodoList',
  tags: ['autodocs'],
  component: TodoList,
  parameters: {
    docs: {
      description: {
        component: `
  A Todo List component that fetches and displays a list of todos from [dummyjson.com](https://dummyjson.com/todos?limit=3&skip=10).

  **Features:**
  - Fetches 3 todos from a remote API on mount
  - Displays todo title and completion status
  - Uses Tailwind CSS for styling

  **Usage:**
  \`\`\`
  <TodoList />
  \`\`\`
        `,
      },
    },
  },
};

export default meta;

type TodoListStory = StoryObj<typeof TodoList>;

export const List: TodoListStory = {
  name: 'List',
  parameters: {
    docs: {
      description: {
        story: 'Default preview of the TodoList component fetching todos from the API.',
      },
    },
  },
  render: (args) => ({
    components: { TodoList },
    setup() {
      return { args };
    },
    template: '<TodoList />',
  }),
};