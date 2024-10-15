import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';

  // Perform search logic here
  const results = await performSearch(query);

  return NextResponse.json({ results });
}

async function performSearch(query: string) {
  // Mock search logic
  const mockData = [
    { id: 1, name: 'Item 1', description: 'Description for item 1' },
    { id: 2, name: 'Item 2', description: 'Description for item 2' },
    { id: 3, name: 'Item 3', description: 'Description for item 3' },
  ];

  // Filter mock data based on query
  return mockData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
}