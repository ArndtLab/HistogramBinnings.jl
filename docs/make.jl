using HistogramBinnings
using Documenter

DocMeta.setdocmeta!(HistogramBinnings, :DocTestSetup, :(using HistogramBinnings); recursive=true)

makedocs(;
    modules=[HistogramBinnings],
    authors="Peter Arndt <arndt@molgen.mpg.de> and contributors",
    sitename="HistogramBinnings.jl",
    format=Documenter.HTML(;
        canonical="https://ArndtLab.github.io/HistogramBinnings.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
        "Installation" => "installation.md",
        "Reference" => "reference.md",
    ],
)

deploydocs(;
    repo="github.com/ArndtLab/HistogramBinnings.jl",
    devbranch="main",
)
