```@meta
CurrentModule = HistogramBinnings
```

# HistogramBinnings

Documentation for [HistogramBinnings](https://github.com/ArndtLab/HistogramBinnings.jl).


This package provides more general edge vectors for histograms. 
Especially it allow to use logarithmically binned histograms.

### Example

```julia
using StatsBase, HistogramBinnings
using Distributions

vs = floor.(Int, rand(Pareto(), 10000000))

h = fit(Histogram, LogEdgeVector, vs)
```

Instead of using `StatsBase.fit` one can alternatively also use `append`"

```julia
h = Histogram(LogEdgeVector(lo = 1, hi = 1_000_000, nbins = 60))
append!(h1, vs)
```