#!/bin/bash

PROTOS=("
    ./protos/google/api/annotations.proto
    ./protos/google/api/http.proto
    ./protos/google/protobuf/any.proto
    ./protos/google/protobuf/descriptor.proto
    ./protos/google/protobuf/duration.proto
    ./protos/google/protobuf/empty.proto
    ./protos/google/protobuf/field_mask.proto
    ./protos/google/protobuf/struct.proto
    ./protos/google/protobuf/timestamp.proto
    ./protos/google/protobuf/wrappers.proto
    ./protos/google/pubsub/v1/pubsub.proto
")

rm -rf ./node/static_codegen/route_guide/google/*

for file in $PROTOS; do
    grpc_tools_node_protoc -I ./protos --js_out=import_style=commonjs,binary:./node/static_codegen/route_guide/ --grpc_out=./node/static_codegen/route_guide/ --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` $file
done
