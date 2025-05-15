import TodoItem from '@/components/TodoItem.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof TodoItem> = {
  title: 'Components/TodoItem',
  tags: ['autodocs'],
  component: TodoItem,
  parameters: {
    docs: {
      description: {
        component: `
  A Todo Item component that displays a single todo item with its title and completion status.
  **Features:**
  - Displays todo title and completion status
  - Uses Tailwind CSS for styling

  **Usage:**
  \`\`\`
   <TodoItem v-for="{ id, todo, completed } in todos" :key="id" :id :todo :completed />
  \`\`\`
        `,
      },
    },
  },
};
export default meta;

type TodoItemStory = StoryObj<typeof TodoItem>;

export const Item: TodoItemStory = {
  name: 'Preview ',
  parameters: {
    docs: {
      description: {
        story: 'Default preview of the TodoItem component displaying a single todo item.',
      },
    },
  },
  argTypes: {
    id: {
      control: {
        type: 'number',
      },
      description: 'Unique identifier for the todo item.',
      defaultValue: 1,
    },
    todo: {
      control: {
        type: 'text',
      },
      description: 'The text of the todo item.',
      defaultValue: 'Sample Todo Item',
    },
    completed: {
      control: {
        type: 'boolean',
      },
      description: 'Indicates whether the todo item is completed.',
      defaultValue: false,
    },
    userId: {
      control: {
        type: 'number',
      },
      description: 'The ID of the user who created the todo item.',
      defaultValue: 1,
    },
  },
  render: (args) => ({
    components: { TodoItem },
    setup() {
      return {
        args
      };
    },
    template: '<TodoItem :id="args.id" :todo="args.todo" :completed="args.completed" :userId="args.userId" />',
  }),
};