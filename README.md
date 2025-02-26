# Virtualized List with React Query and TanStack Virtual

This project demonstrates how to implement a virtualized list using **React Query** (`@tanstack/react-query`) and **TanStack Virtual** (`@tanstack/react-virtual`). The data is fetched from a local JSON server.

## Features
- Virtualized list rendering for efficient performance.
- Data fetching and caching using React Query.
- Local API simulation using JSON Server.

## Installation & Setup

### Clone the Repository
```sh
git clone <repository-url>
cd <project-directory>
```

### Install Dependencies
```sh
npm install
```

### Setup JSON Server
Create a `db.json` file in the root directory with the following content:

```json
{
  "users": [
    {
      "id": "1",
      "name": "John Doe",
      "language": "English",
      "bio": "Software Engineer",
      "version": 1
    },
    {
      "id": "2",
      "name": "Jane Smith",
      "language": "Spanish",
      "bio": "Frontend Developer",
      "version": 1
    }
  ]
}
```

### Run JSON Server
```sh
npm install -g json-server
json-server --watch db.json --port 3000
```
This will start the server at `http://localhost:3000/users`.

### Start the React App
```sh
npm run dev
```

## Project Structure
```
/src
  ├── components
  │   ├── ui
  │   │   ├── List.tsx
  ├── pages
  │   ├── VirtualizedLists.tsx
```
- `VirtualizedLists.tsx`: Implements virtualized scrolling.
- `List.tsx`: UI component for rendering individual list items.

## Technologies Used
- React.js (Next.js if applicable)
- TypeScript
- React Query (`@tanstack/react-query`)
- TanStack Virtual (`@tanstack/react-virtual`)
- JSON Server

## Notes
- Ensure `json-server` is running before starting the React app.
- Adjust the API endpoint in `VirtualizedLists.tsx` if needed.
- The list dynamically renders only visible items for better performance.

## License
This project is open-source and available for modification.

