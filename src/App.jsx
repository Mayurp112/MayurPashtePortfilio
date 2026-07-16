import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

/**
 * App — root component. Single-page portfolio wrapped in the main layout.
 * (React Router is intentionally omitted; navigation is smooth-scroll based.)
 */
export default function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
