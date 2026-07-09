---
description: Measure code you cannot annotate with the manual Scope, BeginSession, and EndSession API.
---

# The Manual API

`[Profile]` is the primary way to use Profiler Decorator, and it covers almost every case. For the occasional block you cannot annotate as a method (part of a method, a loop body, or a third-party call site), there is a manual scope API that records into the same window.

![A manual profiler scope in code](../assets/manual-api/01-manual-scope.png)

!!! info "Prefer the attribute"
    Reach for `[Profile]` first. It needs no setup, no session management, and no cleanup. Use the manual API only when attributing a whole method is not enough.

## Creating a profiler

Create a `Profiler` and give it a display name. It registers itself, so it will appear as a box in the profiler window. Keep the manual API Editor-only, since the runtime types are guarded by `#if UNITY_EDITOR`:

```csharp
#if UNITY_EDITOR
using SpaceWhale.ProfilerDecorator;

private readonly Profiler _profiler = new Profiler("Density Field");
#endif
```

## Timing a block with Scope

Wrap the code you want to measure in a `using` block. The scope times from creation to disposal, so the timing ends when the block exits:

```csharp
_profiler.BeginSession();

using (_profiler.Scope("Sampling"))
{
    // Code to measure.
}

using (_profiler.Scope("Smoothing"))
{
    // Another labelled block.
}

_profiler.EndSession("512 samples");
```

Scopes nest. A scope opened inside another becomes a child of it, building the same self vs total breakdown the attribute produces.

## Sessions

A scope only records between `BeginSession()` and `EndSession()`. Call `BeginSession()` before the work you want to measure and `EndSession()` after it. `EndSession` takes an optional context string (for example `"512 samples"`) that is included in the console log.

Outside an active session, `Scope(...)` returns an inert scope and records nothing, so leftover scope calls are safe.

## Related options

- **`DetailedScope("label")`** records only when the profiler's detailed mode is on. Use it for fine-grained measurements you do not want paying overhead in simple mode.
- **`AutoLog`** (on by default) writes a formatted breakdown to the console when `EndSession` runs. Set it to `false` to read results only in the window.

The manual API feeds the same [Profiler Window](profiler-window.md) and [Frame Graph](frame-graph.md) as the attribute, so the labels you pass to `Scope` show up as rows just like methods do.
