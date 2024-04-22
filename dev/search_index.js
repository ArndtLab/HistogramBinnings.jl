var documenterSearchIndex = {"docs":
[{"location":"installation/","page":"Installation","title":"Installation","text":"CurrentModule = HistogramBinnings","category":"page"},{"location":"installation/#Installation","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"Use the julia package manager to install this package.","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"using Pkg\nPkg.add(\"HistogramBinnings\")","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"CurrentModule = HistogramBinnings","category":"page"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"","category":"page"},{"location":"reference/#Types-and-Functions","page":"Reference","title":"Types and Functions","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [HistogramBinnings]","category":"page"},{"location":"reference/#HistogramBinnings.LinEdgeVector","page":"Reference","title":"HistogramBinnings.LinEdgeVector","text":"LinEdgeVector{T}(; lo = 1, hi = 10, nbins::Integer) where T <: Real\n\nConstruct a linearly spaced edge vector of type T. The edges are spaced evenly in linear space. lo and hi are the lower and upper limits of the histogram. nbins is the number of bins.\n\nExamples\n\nusing StatsBase, HistogramBinnings\n\nh = Histogram(LinEdgeVector(lo = 1, hi = 1_000_000, nbins = 60))\nappend!(h, vs)\n\n\n\n\n\n","category":"type"},{"location":"reference/#HistogramBinnings.LogEdgeVector","page":"Reference","title":"HistogramBinnings.LogEdgeVector","text":"LogEdgeVector{T}(; lo = 1, hi = 10, nbins::Integer) where T <: Real\n\nConstruct a logarithmically spaced edge vector of type T. The edges are spaced evenly in log space. lo and hi are the lower and upper limits of the histogram. nbins is the number of bins.\n\nExamples\n\nusing StatsBase, HistogramBinnings\n\nh = Histogram(LogEdgeVector(lo = 1, hi = 1_000_000, nbins = 60))\nappend!(h, vs)\n\n\n\n\n\n","category":"type"},{"location":"reference/#StatsAPI.fit-Union{Tuple{T}, Tuple{Type{StatsBase.Histogram}, Type{T}, AbstractVector{T} where T}} where T<:HistogramBinnings.AbstractEdgeVector","page":"Reference","title":"StatsAPI.fit","text":"fit(::Type{Histogram}, ::Type{T}, vs::AbstractVector;\n    nbins = sturges(length(vs)),\n    lo = minimum(vs),\n    hi = maximum(vs)\n) where T <: AbstractEdgeVector\n\nFit a histogram with edges T to the data vs.\n\nT is either LogEdgeVector or LinEdgeVector. The edges are Int if  the vs are Int otherwise they are Float64. lo and hi are the lower and upper limits of the histogram. nbins is the number of bins. \n\nExamples\n\nusing StatsBase, HistogramBinnings\nusing Distributions\n\nvs = floor.(Int, rand(Pareto(), 10000000))\n\nh = fit(Histogram, LogEdgeVector, vs)\n\n# or \n\nh = Histogram(LogEdgeVector(lo = 1, hi = 1_000_000, nbins = 60))\nappend!(h1, vs)\n\n\n\n\n\n","category":"method"},{"location":"reference/#StatsBase.midpoints-Union{Tuple{LogEdgeVector{T}}, Tuple{T}} where T<:Real","page":"Reference","title":"StatsBase.midpoints","text":"midpoints(r::AbstractEdgeVector{T}) where T\n\nReturn the midpoints of the bins in r.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = HistogramBinnings","category":"page"},{"location":"#HistogramBinnings","page":"Home","title":"HistogramBinnings","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for HistogramBinnings.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package provides more general edge vectors for histograms.  Especially it allow to use logarithmically binned histograms.","category":"page"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"One can use these with StatsBase.fit as in:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using StatsBase\nusing HistogramBinnings\nusing Distributions\n\n# some data with a fat tail \nvs = floor.(Int, rand(Pareto(), 10000000))\n\nh = fit(Histogram, LogEdgeVector, vs)\nnothing # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"Or for more fine grained control using append as in ","category":"page"},{"location":"","page":"Home","title":"Home","text":"using StatsBase\nusing HistogramBinnings\nusing Distributions\nvs = floor.(Int, rand(Pareto(), 10000000))","category":"page"},{"location":"","page":"Home","title":"Home","text":"h = Histogram(LogEdgeVector(lo = 1, hi = 1_000_000, nbins = 60))\nappend!(h, vs)\nnothing # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"Midpoints of the intervals can be computed with midpoints.  Arithmetic means will be used for intervals in linear space and geometric means for intervals in log space.","category":"page"},{"location":"#Plotting","page":"Home","title":"Plotting","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using StatsBase\nusing HistogramBinnings\nusing Distributions\n\n# some data with a fat tail \nvs = floor.(Int, rand(Pareto(), 10000000))\n\n# Conventional linear binned histogram\nhlin = Histogram(LinEdgeVector(lo = 1, hi = 1_000_000, nbins = 1_000_000))\nappend!(hlin, vs)\n\n# Logarithmically binned histogram\nhlog = Histogram(LogEdgeVector(lo = 1, hi = 1_000_000, nbins = 30))\nappend!(hlog, vs)\n\n# Normalisizing & coordinates of data points\nusing LinearAlgebra\n\nfunction xy(h::Histogram{T, 1, E}; mode = :density) where {T, E}\n    hn = normalize(h; mode)\n    return midpoints(h.edges[1]), hn.weights\nend\n\n# Plotting using PyPlot\nusing PyPlot\n\nfig = figure()\nax = fig.add_subplot(111)\nax.plot(xy(hlin)..., marker = \".\", linestyle = \"none\", label = \"Linear Histogram\")\nax.plot(xy(hlog)..., marker = \"+\", label = \"Logarithmically Binned Histogram\")\nax.set_xscale(\"log\")\nax.set_yscale(\"log\")\nax.legend()\nfig # hide","category":"page"}]
}
