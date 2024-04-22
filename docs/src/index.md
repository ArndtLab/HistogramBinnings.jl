```@meta
CurrentModule = HistogramBinnings
```

# HistogramBinnings

Documentation for [HistogramBinnings](https://github.com/ArndtLab/HistogramBinnings.jl).


This package provides more general edge vectors for histograms. 
Especially it allows to use logarithmically binned histograms.



### Example
One can use these with `StatsBase.fit` as in:

```@example 1
using StatsBase
using HistogramBinnings
using Distributions

# some data with a fat tail 
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
edges = LogEdgeVector{Int}(lo = 1, hi = 1_000_000, nbins = 60)
h = append!(Histogram(edges), vs)
nothing # hide
```
Midpoints of the intervals can be computed with `midpoints`. 
Arithmetic means will be used for intervals in linear space and
geometric means for intervals in log space.

### Plotting

```@example 3
using StatsBase
using HistogramBinnings
using Distributions

# some data with a fat tail 
vs = floor.(Int, rand(Pareto(), 10000000))

# Conventional linear binned histogram
hlin = Histogram(LinEdgeVector(lo = 1, hi = 1_000_000, nbins = 1_000_000))
append!(hlin, vs)

# Logarithmically binned histogram
hlog = Histogram(LogEdgeVector(lo = 1, hi = 1_000_000, nbins = 30))
append!(hlog, vs)

# Normalisizing & coordinates of data points
using LinearAlgebra

function xy(h::Histogram{T, 1, E}; mode = :density) where {T, E}
    hn = normalize(h; mode)
    return midpoints(h.edges[1]), hn.weights
end

# Plotting using PyPlot
using PyPlot

fig = figure()
ax = fig.add_subplot(111)
ax.plot(xy(hlin)..., marker = ".", linestyle = "none", label = "Linear Histogram")
ax.plot(xy(hlog)..., marker = "+", label = "Logarithmically Binned Histogram")
ax.set_xscale("log")
ax.set_yscale("log")
ax.legend()
fig # hide
```