import { useSuspenseQuery } from '@tanstack/react-query';
import List from '../components/ui/List';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';
import { User } from '../@types/users';

/**
 * A React component that renders a virtualized list of users using react-query and react-virtual.
 * 
 * - Utilizes a reference to a scroll container element for virtualization.
 * - Fetches user data from a specified API endpoint using a Suspense-enabled query.
 * - Uses a virtualizer to handle efficient rendering of the list by only displaying visible items.
 * 
 * @returns A scrollable div container with virtualized user list items.
 */

const VirtualizedLists = () => {
  // Reference to the scroll container element
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fetching users data using React Query's Suspense-enabled query
  const { data: users } = useSuspenseQuery<User[]>({
    queryKey: ['userList'], // Unique query key
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/users'); // Fetch data from API
      if (!response.ok) throw new Error('Failed to fetch users'); // Error handling
      return response.json(); // Return fetched users data
    },
  });

  // Virtualizer setup to handle virtualization of the list
  const virtualizer = useVirtualizer({
    count: users.length, // Total number of items in the list
    estimateSize: () => 110, // Estimate item height in pixels
    getScrollElement: () => scrollContainerRef.current, // Scroll container ref
  });

  // Get virtual items (only the visible items that should be rendered)
  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div
      ref={scrollContainerRef} // Scroll container element reference
      className="h-[80dvh] max-w-5xl mx-auto bg-white rounded-2xl overflow-auto"
    >
      <div
        className="relative"
        style={{
          height: `${virtualizer.getTotalSize()}px`, // Dynamic height based on virtualized items
        }}
      >
        <div
          className="absolute top-0 left-0 w-full p-6"
          style={{
            transform: `translateY(${virtualItems[0]?.start ?? 0}px)`, // Position the virtual list based on the start of the first item
          }}
        >
          {virtualItems.map(({ index, key }) => {
            const user = users[index]; // Get the user data at the current index
            return (
              <div
                key={key} // Use unique key for each item
                data-index={index} // if measureElement is used make sure to add data-index so that virtualizer can measure the element
                ref={virtualizer.measureElement} // Measure the element for virtualization
                className="my-3"
              >
                <List data={user} /> {/* Render each user item */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedLists;
