var documenterSearchIndex = {"docs":
[{"location":"api/","page":"API Reference","title":"API Reference","text":"CurrentModule = Main\nCollapsedDocStrings = true","category":"page"},{"location":"api/#API-Reference","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"","category":"page"},{"location":"api/#Interface","page":"API Reference","title":"Interface","text":"","category":"section"},{"location":"api/#Global-sparsity","page":"API Reference","title":"Global sparsity","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"The following functions can be used to compute global sparsity patterns of f(x) over the entire input domain x.","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"connectivity_pattern\njacobian_pattern\nhessian_pattern","category":"page"},{"location":"api/#SparseConnectivityTracer.connectivity_pattern","page":"API Reference","title":"SparseConnectivityTracer.connectivity_pattern","text":"connectivity_pattern(f, x)\nconnectivity_pattern(f, x, T)\n\nEnumerates inputs x and primal outputs y = f(x) and returns sparse matrix C of size (m, n) where C[i, j] is true if the compute graph connects the i-th entry in y to the j-th entry in x.\n\nThe type of index set S can be specified as an optional argument and defaults to BitSet.\n\nExample\n\njulia> x = rand(3);\n\njulia> f(x) = [x[1]^2, 2 * x[1] * x[2]^2, sign(x[3])];\n\njulia> connectivity_pattern(f, x)\n3×3 SparseArrays.SparseMatrixCSC{Bool, Int64} with 4 stored entries:\n 1  ⋅  ⋅\n 1  1  ⋅\n ⋅  ⋅  1\n\n\n\n\n\nconnectivity_pattern(f!, y, x)\nconnectivity_pattern(f!, y, x, T)\n\nEnumerates inputs x and primal outputs y after f!(y, x) and returns sparse matrix C of size (m, n) where C[i, j] is true if the compute graph connects the i-th entry in y to the j-th entry in x.\n\nThe type of index set S can be specified as an optional argument and defaults to BitSet.\n\n\n\n\n\n","category":"function"},{"location":"api/#SparseConnectivityTracer.jacobian_pattern","page":"API Reference","title":"SparseConnectivityTracer.jacobian_pattern","text":"jacobian_pattern(f, x)\njacobian_pattern(f, x, T)\n\nCompute the sparsity pattern of the Jacobian of y = f(x).\n\nThe type of index set S can be specified as an optional argument and defaults to BitSet.\n\nExample\n\njulia> x = rand(3);\n\njulia> f(x) = [x[1]^2, 2 * x[1] * x[2]^2, sign(x[3])];\n\njulia> jacobian_pattern(f, x)\n3×3 SparseArrays.SparseMatrixCSC{Bool, Int64} with 3 stored entries:\n 1  ⋅  ⋅\n 1  1  ⋅\n ⋅  ⋅  ⋅\n\n\n\n\n\njacobian_pattern(f!, y, x)\njacobian_pattern(f!, y, x, T)\n\nCompute the sparsity pattern of the Jacobian of f!(y, x).\n\nThe type of index set S can be specified as an optional argument and defaults to BitSet.\n\n\n\n\n\n","category":"function"},{"location":"api/#SparseConnectivityTracer.hessian_pattern","page":"API Reference","title":"SparseConnectivityTracer.hessian_pattern","text":"hessian_pattern(f, x)\nhessian_pattern(f, x, T)\n\nComputes the sparsity pattern of the Hessian of a scalar function y = f(x).\n\nThe type of index set S can be specified as an optional argument and defaults to BitSet.\n\nExample\n\njulia> x = rand(5);\n\njulia> f(x) = x[1] + x[2]*x[3] + 1/x[4] + 1*x[5];\n\njulia> hessian_pattern(f, x)\n5×5 SparseArrays.SparseMatrixCSC{Bool, Int64} with 3 stored entries:\n ⋅  ⋅  ⋅  ⋅  ⋅\n ⋅  ⋅  1  ⋅  ⋅\n ⋅  1  ⋅  ⋅  ⋅\n ⋅  ⋅  ⋅  1  ⋅\n ⋅  ⋅  ⋅  ⋅  ⋅\n\njulia> g(x) = f(x) + x[2]^x[5];\n\njulia> hessian_pattern(g, x)\n5×5 SparseArrays.SparseMatrixCSC{Bool, Int64} with 7 stored entries:\n ⋅  ⋅  ⋅  ⋅  ⋅\n ⋅  1  1  ⋅  1\n ⋅  1  ⋅  ⋅  ⋅\n ⋅  ⋅  ⋅  1  ⋅\n ⋅  1  ⋅  ⋅  1\n\n\n\n\n\n","category":"function"},{"location":"api/","page":"API Reference","title":"API Reference","text":"Alternatively, ADTypes.jl's interface can be used:","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"TracerSparsityDetector","category":"page"},{"location":"api/#SparseConnectivityTracer.TracerSparsityDetector","page":"API Reference","title":"SparseConnectivityTracer.TracerSparsityDetector","text":"TracerSparsityDetector <: ADTypes.AbstractSparsityDetector\n\nSingleton struct for integration with the sparsity detection framework of ADTypes.jl.\n\nExample\n\njulia> using ADTypes, SparseConnectivityTracer\n\njulia> ADTypes.jacobian_sparsity(diff, rand(4), TracerSparsityDetector())\n3×4 SparseArrays.SparseMatrixCSC{Bool, Int64} with 6 stored entries:\n 1  1  ⋅  ⋅\n ⋅  1  1  ⋅\n ⋅  ⋅  1  1\n\njulia> using ADTypes, SparseConnectivityTracer\n\njulia> f(x) = x[1] + x[2]*x[3] + 1/x[4];\n\njulia> ADTypes.hessian_sparsity(f, rand(4), TracerSparsityDetector())\n4×4 SparseArrays.SparseMatrixCSC{Bool, Int64} with 3 stored entries:\n ⋅  ⋅  ⋅  ⋅\n ⋅  ⋅  1  ⋅\n ⋅  1  ⋅  ⋅\n ⋅  ⋅  ⋅  1\n\n\n\n\n\n","category":"type"},{"location":"api/#Local-sparsity","page":"API Reference","title":"Local sparsity","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"The following functions can be used to compute local sparsity patterns of f(x) at a specific input x. Note that these patterns are sparser than global patterns but need to be recomputed when x changes.","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"local_connectivity_pattern\nlocal_jacobian_pattern\nlocal_hessian_pattern","category":"page"},{"location":"api/#SparseConnectivityTracer.local_connectivity_pattern","page":"API Reference","title":"SparseConnectivityTracer.local_connectivity_pattern","text":"local_connectivity_pattern(f, x)\nlocal_connectivity_pattern(f, x, T)\n\nEnumerates inputs x and primal outputs y = f(x) and returns sparse matrix C of size (m, n) where C[i, j] is true if the compute graph connects the i-th entry in y to the j-th entry in x.\n\nUnlike connectivity_pattern, this function supports control flow and comparisons.\n\nThe type of index set S can be specified as an optional argument and defaults to BitSet.\n\nExample\n\njulia> f(x) = ifelse(x[2] < x[3], x[1] + x[2], x[3] * x[4]);\n\njulia> x = [1 2 3 4];\n\njulia> local_connectivity_pattern(f, x)\n1×4 SparseArrays.SparseMatrixCSC{Bool, Int64} with 2 stored entries:\n 1  1  ⋅  ⋅\n\njulia> x = [1 3 2 4];\n\njulia> local_connectivity_pattern(f, x)\n1×4 SparseArrays.SparseMatrixCSC{Bool, Int64} with 2 stored entries:\n ⋅  ⋅  1  1\n\n\n\n\n\nlocal_connectivity_pattern(f!, y, x)\nlocal_connectivity_pattern(f!, y, x, T)\n\nEnumerates inputs x and primal outputs y after f!(y, x) and returns sparse matrix C of size (m, n) where C[i, j] is true if the compute graph connects the i-th entry in y to the j-th entry in x.\n\nUnlike connectivity_pattern, this function supports control flow and comparisons.\n\nThe type of index set S can be specified as an optional argument and defaults to BitSet.\n\n\n\n\n\n","category":"function"},{"location":"api/#SparseConnectivityTracer.local_jacobian_pattern","page":"API Reference","title":"SparseConnectivityTracer.local_jacobian_pattern","text":"local_jacobian_pattern(f, x)\nlocal_jacobian_pattern(f, x, T)\n\nCompute the local sparsity pattern of the Jacobian of y = f(x) at x.\n\nThe type of index set S can be specified as an optional argument and defaults to BitSet.\n\nExample\n\njulia> x = [1.0, 2.0, 3.0];\n\njulia> f(x) = [x[1]^2, 2 * x[1] * x[2]^2, max(x[2],x[3])];\n\njulia> local_jacobian_pattern(f, x)\n3×3 SparseArrays.SparseMatrixCSC{Bool, Int64} with 4 stored entries:\n 1  ⋅  ⋅\n 1  1  ⋅\n ⋅  ⋅  1\n\n\n\n\n\nlocal_jacobian_pattern(f!, y, x)\nlocal_jacobian_pattern(f!, y, x, T)\n\nCompute the local sparsity pattern of the Jacobian of f!(y, x) at x.\n\nThe type of index set S can be specified as an optional argument and defaults to BitSet.\n\n\n\n\n\n","category":"function"},{"location":"api/#SparseConnectivityTracer.local_hessian_pattern","page":"API Reference","title":"SparseConnectivityTracer.local_hessian_pattern","text":"local_hessian_pattern(f, x)\nlocal_hessian_pattern(f, x, T)\n\nComputes the local sparsity pattern of the Hessian of a scalar function y = f(x) at x.\n\nThe type of index set S can be specified as an optional argument and defaults to BitSet.\n\nExample\n\njulia> x = [1.0 3.0 5.0 1.0 2.0];\n\njulia> f(x) = x[1] + x[2]*x[3] + 1/x[4] + x[2] * max(x[1], x[5]);\n\njulia> local_hessian_pattern(f, x)\n5×5 SparseArrays.SparseMatrixCSC{Bool, Int64} with 5 stored entries:\n ⋅  ⋅  ⋅  ⋅  ⋅\n ⋅  ⋅  1  ⋅  1\n ⋅  1  ⋅  ⋅  ⋅\n ⋅  ⋅  ⋅  1  ⋅\n ⋅  1  ⋅  ⋅  ⋅\n\njulia> x = [4.0 3.0 5.0 1.0 2.0];\n\njulia> local_hessian_pattern(f, x)\n5×5 SparseArrays.SparseMatrixCSC{Bool, Int64} with 5 stored entries:\n ⋅  1  ⋅  ⋅  ⋅\n 1  ⋅  1  ⋅  ⋅\n ⋅  1  ⋅  ⋅  ⋅\n ⋅  ⋅  ⋅  1  ⋅\n ⋅  ⋅  ⋅  ⋅  ⋅\n\n\n\n\n\n","category":"function"},{"location":"api/","page":"API Reference","title":"API Reference","text":"Note that ADTypes.jl doesn't provide an interface for local sparsity detection.","category":"page"},{"location":"api/#Internals","page":"API Reference","title":"Internals","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"warning: Warning\nInternals may change without warning in a future release of SparseConnectivityTracer.","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"SparseConnectivityTracer works by pushing Number types called tracers through generic functions. Currently, three tracer types are provided:","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"SparseConnectivityTracer.ConnectivityTracer\nSparseConnectivityTracer.GradientTracer\nSparseConnectivityTracer.HessianTracer","category":"page"},{"location":"api/#SparseConnectivityTracer.ConnectivityTracer","page":"API Reference","title":"SparseConnectivityTracer.ConnectivityTracer","text":"struct ConnectivityTracer{C<:(AbstractSet{<:Integer})} <: SparseConnectivityTracer.AbstractTracer\n\nNumber type keeping track of input indices of previous computations.\n\nFor a higher-level interface, refer to connectivity_pattern.\n\nFields\n\ninputs::AbstractSet{<:Integer}: Sparse binary vector representing non-zero indices of connected, enumerated inputs.\n\nExample\n\njulia> inputs = Set([1, 3])\nSet{Int64} with 2 elements:\n  3\n  1\n\njulia> SparseConnectivityTracer.ConnectivityTracer(inputs)\nSparseConnectivityTracer.ConnectivityTracer{Set{Int64}}(1, 3)\n\n\n\n\n\n","category":"type"},{"location":"api/#SparseConnectivityTracer.GradientTracer","page":"API Reference","title":"SparseConnectivityTracer.GradientTracer","text":"struct GradientTracer{G<:(AbstractSet{<:Integer})} <: SparseConnectivityTracer.AbstractTracer\n\nNumber type keeping track of non-zero gradient entries.\n\nFor a higher-level interface, refer to jacobian_pattern.\n\nFields\n\ngrad::AbstractSet{<:Integer}: Sparse binary vector representing non-zero entries in the gradient.\n\nExample\n\njulia> grad = Set([1, 3])\nSet{Int64} with 2 elements:\n  3\n  1\n\njulia> SparseConnectivityTracer.GradientTracer(grad)\nSparseConnectivityTracer.GradientTracer{Set{Int64}}(1, 3)\n\n\n\n\n\n","category":"type"},{"location":"api/#SparseConnectivityTracer.HessianTracer","page":"API Reference","title":"SparseConnectivityTracer.HessianTracer","text":"struct HessianTracer{G<:(AbstractSet{<:Integer}), H<:(AbstractSet{<:Tuple{Integer, Integer}})} <: SparseConnectivityTracer.AbstractTracer\n\nNumber type keeping track of non-zero gradient and Hessian entries.\n\nFor a higher-level interface, refer to hessian_pattern.\n\nFields\n\ngrad::AbstractSet{<:Integer}: Sparse binary vector representation of non-zero entries in the gradient.\nhess::AbstractSet{<:Tuple{Integer, Integer}}: Sparse binary matrix representation of non-zero entries in the Hessian.\n\nExample\n\njulia> grad = Set([1, 3])\nSet{Int64} with 2 elements:\n  3\n  1\n\njulia> hess = Set([(1, 1), (2, 3), (3, 2)])\nSet{Tuple{Int64, Int64}} with 3 elements:\n  (3, 2)\n  (1, 1)\n  (2, 3)\n\njulia> SparseConnectivityTracer.HessianTracer(grad, hess)\nSparseConnectivityTracer.HessianTracer{Set{Int64}, Set{Tuple{Int64, Int64}}}(\n  Gradient: Set([3, 1]),\n  Hessian:  Set([(3, 2), (1, 1), (2, 3)])\n)\n\n\n\n\n\n","category":"type"},{"location":"api/","page":"API Reference","title":"API Reference","text":"These can be used alone or inside of the dual number type Dual, which keeps track of the primal computation and allows tracing through comparisons and control flow:","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"SparseConnectivityTracer.Dual","category":"page"},{"location":"api/#SparseConnectivityTracer.Dual","page":"API Reference","title":"SparseConnectivityTracer.Dual","text":"struct Dual{P<:Number, T<:Union{SparseConnectivityTracer.ConnectivityTracer, SparseConnectivityTracer.GradientTracer, SparseConnectivityTracer.HessianTracer}} <: SparseConnectivityTracer.AbstractTracer\n\nDual number type keeping track of the results of a primal computation as well as a tracer.\n\nFields\n\nprimal::Number\ntracer::Union{SparseConnectivityTracer.ConnectivityTracer, SparseConnectivityTracer.GradientTracer, SparseConnectivityTracer.HessianTracer}\n\n\n\n\n\n","category":"type"},{"location":"api/","page":"API Reference","title":"API Reference","text":"We also define alternative pseudo-set types that can deliver faster union:","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"SparseConnectivityTracer.DuplicateVector\nSparseConnectivityTracer.RecursiveSet\nSparseConnectivityTracer.SortedVector","category":"page"},{"location":"api/#SparseConnectivityTracer.DuplicateVector","page":"API Reference","title":"SparseConnectivityTracer.DuplicateVector","text":"DuplicateVector\n\nVector that can have duplicate values, for which union is just concatenation.\n\n\n\n\n\n","category":"type"},{"location":"api/#SparseConnectivityTracer.RecursiveSet","page":"API Reference","title":"SparseConnectivityTracer.RecursiveSet","text":"RecursiveSet\n\nLazy union of sets.\n\n\n\n\n\n","category":"type"},{"location":"api/#SparseConnectivityTracer.SortedVector","page":"API Reference","title":"SparseConnectivityTracer.SortedVector","text":"SortedVector\n\nSorted vector without duplicates, designed for fast set unions with merging.\n\n\n\n\n\n","category":"type"},{"location":"#SparseConnectivityTracer.jl","page":"Home","title":"SparseConnectivityTracer.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Stable) (Image: Dev) (Image: Build Status) (Image: Coverage) (Image: Aqua)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Fast Jacobian and Hessian sparsity detection via operator-overloading.","category":"page"},{"location":"","page":"Home","title":"Home","text":"[!WARNING] This package is in early development. Expect frequent breaking changes and refer to the stable documentation.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install this package, open the Julia REPL and run ","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> ]add SparseConnectivityTracer","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"#Jacobian","page":"Home","title":"Jacobian","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For functions y = f(x) and f!(y, x), the sparsity pattern of the Jacobian of f can be obtained by computing a single forward-pass through f:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using SparseConnectivityTracer\n\njulia> x = rand(3);\n\njulia> f(x) = [x[1]^2, 2 * x[1] * x[2]^2, sin(x[3])];\n\njulia> jacobian_pattern(f, x)\n3×3 SparseArrays.SparseMatrixCSC{Bool, Int64} with 4 stored entries:\n 1  ⋅  ⋅\n 1  1  ⋅\n ⋅  ⋅  1","category":"page"},{"location":"","page":"Home","title":"Home","text":"As a larger example, let's compute the sparsity pattern from a convolutional layer from Flux.jl:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using SparseConnectivityTracer, Flux\n\njulia> x = rand(28, 28, 3, 1);\n\njulia> layer = Conv((3, 3), 3 => 2);\n\njulia> jacobian_pattern(layer, x)\n1352×2352 SparseArrays.SparseMatrixCSC{Bool, Int64} with 36504 stored entries:\n⎡⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⎤\n⎢⠀⠀⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⎥\n⎢⠀⠀⠀⠀⠙⢿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⎥\n⎢⠀⠀⠀⠀⠀⠀⠙⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣦⡀⠀⠀⠀⠀⠀⎥\n⎢⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣦⣀⠀⠀⠀⎥\n⎢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣷⣄⠀⎥\n⎢⢤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⢦⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠳⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠓⎥\n⎢⠀⠙⢿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⎥\n⎢⠀⠀⠀⠉⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⎥\n⎢⠀⠀⠀⠀⠀⠈⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣦⣄⠀⠀⠀⠀⠀⠀⎥\n⎢⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣷⣄⠀⠀⠀⠀⎥\n⎢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣄⠀⠀⎥\n⎣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣄⎦","category":"page"},{"location":"","page":"Home","title":"Home","text":"The type of index set S that is internally used to keep track of connectivity can be specified via jacobian_pattern(f, x, S), defaulting to BitSet.  For high-dimensional functions, Set{Int64} can be more efficient .","category":"page"},{"location":"#Hessian","page":"Home","title":"Hessian","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For scalar functions y = f(x), the sparsity pattern of the Hessian of f can be obtained by computing a single forward-pass through f:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x = rand(5);\n\njulia> f(x) = x[1] + x[2]*x[3] + 1/x[4] + 1*x[5];\n\njulia> hessian_pattern(f, x)\n5×5 SparseArrays.SparseMatrixCSC{Bool, Int64} with 3 stored entries:\n ⋅  ⋅  ⋅  ⋅  ⋅\n ⋅  ⋅  1  ⋅  ⋅\n ⋅  1  ⋅  ⋅  ⋅\n ⋅  ⋅  ⋅  1  ⋅\n ⋅  ⋅  ⋅  ⋅  ⋅\n\njulia> g(x) = f(x) + x[2]^x[5];\n\njulia> hessian_pattern(g, x)\n5×5 SparseArrays.SparseMatrixCSC{Bool, Int64} with 7 stored entries:\n ⋅  ⋅  ⋅  ⋅  ⋅\n ⋅  1  1  ⋅  1\n ⋅  1  ⋅  ⋅  ⋅\n ⋅  ⋅  ⋅  1  ⋅\n ⋅  1  ⋅  ⋅  1","category":"page"},{"location":"","page":"Home","title":"Home","text":"For more detailled examples, take a look at the documentation.","category":"page"},{"location":"#Local-tracing","page":"Home","title":"Local tracing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The functions jacobian_pattern, hessian_pattern and connectivity_pattern return conservative sparsity patterns over the entire input domain of x.  They are not compatible with functions that require information about the primal values of a computation (e.g. iszero, >, ==).","category":"page"},{"location":"","page":"Home","title":"Home","text":"To compute a less conservative sparsity pattern at an input point x, use local_jacobian_pattern, local_hessian_pattern and local_connectivity_pattern instead. Note that these patterns depend on the input x:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> f(x) = ifelse(x[2] < x[3], x[1] ^ x[2], x[3] * x[4]);\n\njulia> local_hessian_pattern(f, [1 2 3 4])\n4×4 SparseArrays.SparseMatrixCSC{Bool, Int64} with 4 stored entries:\n 1  1  ⋅  ⋅\n 1  1  ⋅  ⋅\n ⋅  ⋅  ⋅  ⋅\n ⋅  ⋅  ⋅  ⋅\n\njulia> local_hessian_pattern(f, [1 3 2 4])\n4×4 SparseArrays.SparseMatrixCSC{Bool, Int64} with 2 stored entries:\n ⋅  ⋅  ⋅  ⋅\n ⋅  ⋅  ⋅  ⋅\n ⋅  ⋅  ⋅  1\n ⋅  ⋅  1  ⋅","category":"page"},{"location":"#Related-packages","page":"Home","title":"Related packages","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"SparseDiffTools.jl: automatic sparsity detection via Symbolics.jl and Cassette.jl\nSparsityTracing.jl: automatic Jacobian sparsity detection using an algorithm based on SparsLinC by Bischof et al. (1996)","category":"page"}]
}
