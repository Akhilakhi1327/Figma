import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for dashboard data management
 * Handles loading states, errors, and mock data
 */
export const useDashboardData = (timeframe) => {
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate API call with mock data
  const fetchMockData = useCallback(async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      revenueBreakdown: [
        { source: 'Course Sales', amount: 163962, percentage: 64, color: '#3B82F6' },
        { source: 'Live Classes', amount: 53743, percentage: 21, color: '#10B981' },
        { source: 'Mentorship', amount: 23235, percentage: 9, color: '#F59E0B' },
        { source: 'Other', amount: 13022, percentage: 5, color: '#8B5CF6' }
      ],
      enrollmentTrends: {
        total: 3025,
        completed: 1749,
        applications: 252,
        monthlyData: [
          { month: 'Jan', enrollments: 240 },
          { month: 'Feb', enrollments: 280 },
          { month: 'Mar', enrollments: 320 },
          { month: 'Apr', enrollments: 290 },
          { month: 'May', enrollments: 310 },
          { month: 'Jun', enrollments: 340 },
          { month: 'Jul', enrollments: 360 },
          { month: 'Aug', enrollments: 380 },
          { month: 'Sep', enrollments: 350 },
          { month: 'Oct', enrollments: 330 },
          { month: 'Nov', enrollments: 300 },
          { month: 'Dec', enrollments: 280 }
        ]
      },
      demographics: {
        ageGroups: [
          { range: '18-24', count: 850, percentage: 28 },
          { range: '25-34', count: 1200, percentage: 40 },
          { range: '35-44', count: 650, percentage: 21 },
          { range: '45+', count: 325, percentage: 11 }
        ]
      }
    };
  }, []);

  const fetchDashboardData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await fetchMockData();
      setDashboardData(data);
    } catch (err) {
      console.error('Failed to fetch dashboard data:', err);
      setError('Failed to load dashboard data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [fetchMockData]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const refreshData = useCallback(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return {
    dashboardData,
    isLoading,
    error,
    refreshData
  };
};