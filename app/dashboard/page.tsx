import DashboardGate from './dashboard-gate';
import { Suspense } from 'react';
import DashboardFallback from './dashboard-fallback';

export default function DashboardPage() {
    return (
        <Suspense fallback={<DashboardFallback />}><DashboardGate /></Suspense>
    );
}