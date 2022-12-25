import { Button } from '../lib/ui-comp-button';

export default { title: 'Button' };

export const primary = () => <Button>Hello Button</Button>;

export const secondary = () => (
  <div style={{ background: '#1652f0', padding: 12 }}>
    <Button variant="secondary">Hello Button</Button>
  </div>
);
