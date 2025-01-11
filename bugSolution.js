```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldUnmount, setShouldUnmount] = useState(false);

  useEffect(() => {
    console.log('Mounted!');
    return () => {
      console.log('Unmounted!');
    };
  }, [shouldUnmount]); // Add shouldUnmount to dependency array

  const handleUnmount = () => {
    setShouldUnmount(true);
  }

  if (shouldUnmount) {
    return null;
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
}
```