---
description: An attribute-driven method profiler for the Unity Editor with a live window and frame graph.
---

# Profiler Decorator

![Profiler Decorator window measuring a running scene](assets/hero.png)

Profiler Decorator is a code-level profiler you drive with a single attribute. Add `[Profile]` to a method (or a whole class) and timing instrumentation is woven into the compiled assembly, then streamed live into a profiler window while you play. There are no manual timer calls to write, no `using` blocks to wrap, and nothing to remove before you ship.

Everything measures in the Editor only. The measurement bodies are guarded by `#if UNITY_EDITOR`, so player builds carry zero profiling cost. The `[Profile]` attribute itself is just metadata: the IL post-processor reads it at compile time and injects the timing, so instrumented and shipped code stay in sync automatically.

## What you get

- **Attribute-driven.** Mark a method with `[Profile]`, or a class to profile every method in it. No manual scope calls.
- **Woven at compile time.** An IL post-processor injects the timing when the assembly builds, so there is no reflection at runtime.
- **Editor-only, zero build cost.** Measurement is stripped from player builds; the attribute is inert metadata there.
- **Live worst-offenders window.** A sorted table per profiler showing self time, total time, percentage of frame, call count, average, and a per-frame delta.
- **Self vs total time.** See exclusive (self) and inclusive (total, including children) time side by side.
- **Per-frame history sparklines.** Every method carries a live sparkline; click one to open the full frame graph.
- **Frame graph drill-down.** A dedicated window with bar, line, and stacked class views, zoom, moving average, and per-frame inspection.
- **Overhead readout.** The window reports the estimated cost of the instrumentation itself so you can trust the numbers.
- **Manual scope API.** For code you cannot annotate, a `using (profiler.Scope("label"))` block records the same way.

## Where to start

- **New to the asset?** Read [Getting Started](getting-started.md).
- **Want the attribute in depth?** See [The Profile Attribute](features/profile-attribute.md).
- **Reading the numbers?** See [The Profiler Window](features/profiler-window.md) and [The Frame Graph](features/frame-graph.md).

## Compatibility

Built against Unity 6 (6000.0+). Uses the Unity ILPostProcessor pipeline and public Editor APIs only.
