# React useEffect Cleanup Function Not Called

This repository demonstrates a common React bug related to the useEffect hook's cleanup function not being called when a component unmounts prematurely.  The issue typically arises from unexpected component unmounting, often due to parent component re-renders or navigation changes.

## Problem Description

The provided `bug.js` file contains a React component that uses the useEffect hook to log messages on mount and unmount.  Under normal circumstances, the cleanup function (returned from useEffect) should log 'Unmounted!' before the component is removed from the DOM. However, due to (simulated) premature unmounting, this message may not appear.

## Solution

The `bugSolution.js` file addresses this issue by ensuring the cleanup function is properly called, even in the case of premature unmounting. This might involve changes to component lifecycle handling or careful dependency management within useEffect to prevent unnecessary renders.