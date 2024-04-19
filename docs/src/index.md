```@meta
CurrentModule = HistogramBinnings
```

# HistogramBinnings

Documentation for [HistogramBinnings](https://github.com/ArndtLab/HistogramBinnings.jl).


This package provides more general edge vectors for histograms. 
Especially it allow to use logarithmically binned histograms.

### Example
One can use these with `StatsBase.fit` as in:

```@example 1
using StatsBase
using HistogramBinnings
using Distributions

vs = floor.(Int, rand(Pareto(), 10000000))

h = fit(Histogram, LogEdgeVector, vs)
nothing # hide
```

Or for more fine grained control using `append` as in 

```@setup  2
using StatsBase
using HistogramBinnings
using Distributions
vs = floor.(Int, rand(Pareto(), 10000000))
```

```@example 2
h = Histogram(LogEdgeVector(lo = 1, hi = 1_000_000, nbins = 60))
append!(h, vs)
nothing # hide
```