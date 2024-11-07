export const Analytics = {
  track: (event: string, properties?: Record<string, unknown>) => {
    // Implement your analytics tracking here
    console.log('Track:', event, properties);
  },
}; 