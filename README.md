# Advanced Data Fetching in Next.js App Router

## Pages & Rendering Strategies

- /about → Static Rendering (SSG)
- /dashboard → Dynamic Rendering (SSR)
- /news → Hybrid Rendering (ISR)

## Why These Choices?

### Static Rendering
Used for the About page since content does not change often.
It provides fast load times and zero server cost per request.

### Dynamic Rendering
Used for Dashboard to fetch real-time data on every request.
Ensures fresh data but increases server load.

### Hybrid Rendering (ISR)
Used for News page to balance freshness and performance.
Pages are statically served but revalidated every 60 seconds.

## Performance, Scalability & Freshness

- Static pages scale best and are fastest.
- Dynamic pages provide real-time data but cost more.
- Hybrid pages balance both using revalidation.

## Case Study: DailyEdge News Portal

Using only static rendering caused outdated news.
Switching fully to SSR improved freshness but increased cost.

Best solution:
- Homepage → ISR (revalidate every 30–60s)
- Breaking news → Dynamic rendering
- Articles → Static rendering with ISR
Implemented Static, Dynamic, and Hybrid Rendering using Next.js App Router


## Reflection

If the app had 10x more users, using SSR everywhere would be costly.
Most pages should use static or hybrid rendering, reserving SSR only
for pages that truly need real-time data.
