{
  "targets": [
    {
      "target_name": "<(module_name)",
      "product_dir": "<(module_path)",
      "sources": ["tulind.cpp", "tiamalgamation.c"],
      "include_dirs": [ "<!(node -e \"require('nan')\")" ]
    }
  ]
}
