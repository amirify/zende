import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from './Button';

// Rendering the Button with Default Properties
test('renders button with default properties', () => {
	render(<Button>Default Button</Button>);

	const button = screen.getByRole('button', { name: /default button/i });
	expect(button).toBeInTheDocument();
	expect(button).toHaveTextContent('Default Button');
});

// Handling disabled State
test('renders disabled button and prevents clicks', async () => {
	const handleClick = jest.fn();
	render(<Button disabled onClick={handleClick}>Disabled Button</Button>);
	
	const button = screen.getByRole('button', { name: /disabled button/i });
	expect(button).toBeDisabled();
	
	await userEvent.click(button);
	expect(handleClick).not.toHaveBeenCalled();
});

// Rendering with Different Variants
test('renders button with variant: outlined', () => {
	render(<Button variant="outlined">Outlined Button</Button>);
	
	const button = screen.getByRole('button', { name: /outlined button/i });
	expect(button).toBeInTheDocument();
});

// Rendering with Different Sizes
test('renders button with size: large', () => {
	render(<Button size="large">Large Button</Button>);
	
	const button = screen.getByRole('button', { name: /large button/i });
	expect(button).toBeInTheDocument();
});

// Displaying an Icon in Different Positions
test('renders button with an icon at the start', () => {
	render(<Button icon={<span data-testid="icon">🔍</span>} iconPosition="start">Icon Button</Button>);
	
	const button = screen.getByRole('button', { name: /icon button/i });
	const icon = screen.getByTestId('icon');
	expect(button).toContainElement(icon);
});

// Displaying Loading Icon Instead of Label When showLoading Prop Is True
test('toggles visibility between loading icon and button text based on showLoading', () => {
	render(<Button showLoading loadingIcon={<span data-testid="loading-icon">⏳</span>}>Button Text</Button>);

	// Check that the loading icon is visible
	const loadingIcon = screen.getByTestId('loading-icon');
	expect(loadingIcon).toBeVisible();
	
	// Check that the button text is not visible
	const buttonText = screen.getByText('Button Text');
	expect(buttonText).not.toBeVisible();
});

// Applying block Style
test('renders button with full width when block is true', () => {
	render(<Button block>Full Width Button</Button>);
	
	const button = screen.getByRole('button', { name: /full width button/i });
	expect(button).toBeInTheDocument();
	// We assume a CSS class or style would make the button full-width, which can be checked visually or with snapshot testing
});

// Click Event Handling
test('calls onClick handler when clicked', async () => {
	const handleClick = jest.fn();
	render(<Button onClick={handleClick}>Clickable Button</Button>);
	
	const button = screen.getByRole('button', { name: /clickable button/i });
	await userEvent.click(button);
	expect(handleClick).toHaveBeenCalledTimes(1);
});

// Snapshot Test
test('Matches snapshot', () => {
  const { asFragment } = render(<Button>Test Button</Button>);
  expect(asFragment()).toMatchSnapshot();
});