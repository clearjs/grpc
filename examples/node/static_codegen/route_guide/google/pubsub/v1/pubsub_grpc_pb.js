// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var google_pubsub_v1_pubsub_pb = require('../../../google/pubsub/v1/pubsub_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_AcknowledgeRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.AcknowledgeRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.AcknowledgeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_AcknowledgeRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.AcknowledgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_CreateSnapshotRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.CreateSnapshotRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.CreateSnapshotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_CreateSnapshotRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.CreateSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_DeleteSnapshotRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.DeleteSnapshotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_DeleteSnapshotRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_DeleteSubscriptionRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.DeleteSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_DeleteSubscriptionRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_DeleteTopicRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.DeleteTopicRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.DeleteTopicRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_DeleteTopicRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.DeleteTopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_GetSnapshotRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.GetSnapshotRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.GetSnapshotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_GetSnapshotRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.GetSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_GetSubscriptionRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.GetSubscriptionRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.GetSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_GetSubscriptionRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.GetSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_GetTopicRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.GetTopicRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.GetTopicRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_GetTopicRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.GetTopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ListSnapshotsRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.ListSnapshotsRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.ListSnapshotsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ListSnapshotsRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.ListSnapshotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ListSnapshotsResponse(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.ListSnapshotsResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1.ListSnapshotsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ListSnapshotsResponse(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.ListSnapshotsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ListSubscriptionsRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.ListSubscriptionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ListSubscriptionsRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ListSubscriptionsResponse(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1.ListSubscriptionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ListSubscriptionsResponse(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ListTopicSnapshotsRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.ListTopicSnapshotsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ListTopicSnapshotsRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ListTopicSnapshotsResponse(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1.ListTopicSnapshotsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ListTopicSnapshotsResponse(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ListTopicSubscriptionsRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.ListTopicSubscriptionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ListTopicSubscriptionsRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ListTopicSubscriptionsResponse(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1.ListTopicSubscriptionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ListTopicSubscriptionsResponse(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ListTopicsRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.ListTopicsRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.ListTopicsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ListTopicsRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.ListTopicsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ListTopicsResponse(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.ListTopicsResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1.ListTopicsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ListTopicsResponse(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.ListTopicsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ModifyAckDeadlineRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.ModifyAckDeadlineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ModifyAckDeadlineRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_ModifyPushConfigRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.ModifyPushConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_ModifyPushConfigRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_PublishRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.PublishRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.PublishRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_PublishRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.PublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_PublishResponse(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.PublishResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1.PublishResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_PublishResponse(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.PublishResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_PullRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.PullRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.PullRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_PullRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.PullRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_PullResponse(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.PullResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1.PullResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_PullResponse(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.PullResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_SeekRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.SeekRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.SeekRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_SeekRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.SeekRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_SeekResponse(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.SeekResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1.SeekResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_SeekResponse(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.SeekResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_Snapshot(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.Snapshot)) {
    throw new Error('Expected argument of type google.pubsub.v1.Snapshot');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_Snapshot(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.Snapshot.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_StreamingPullRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.StreamingPullRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.StreamingPullRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_StreamingPullRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.StreamingPullRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_StreamingPullResponse(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.StreamingPullResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1.StreamingPullResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_StreamingPullResponse(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.StreamingPullResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_Subscription(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.Subscription)) {
    throw new Error('Expected argument of type google.pubsub.v1.Subscription');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_Subscription(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.Subscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_Topic(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.Topic)) {
    throw new Error('Expected argument of type google.pubsub.v1.Topic');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_Topic(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.Topic.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_UpdateSnapshotRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.UpdateSnapshotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_UpdateSnapshotRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_UpdateSubscriptionRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.UpdateSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_UpdateSubscriptionRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1_UpdateTopicRequest(arg) {
  if (!(arg instanceof google_pubsub_v1_pubsub_pb.UpdateTopicRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1.UpdateTopicRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1_UpdateTopicRequest(buffer_arg) {
  return google_pubsub_v1_pubsub_pb.UpdateTopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The service that an application uses to manipulate topics, and to send
// messages to a topic.
var PublisherService = exports.PublisherService = {
  // Creates the given topic with the given name. See the
  // <a href="/pubsub/docs/admin#resource_names"> resource name rules</a>.
  createTopic: {
    path: '/google.pubsub.v1.Publisher/CreateTopic',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.Topic,
    responseType: google_pubsub_v1_pubsub_pb.Topic,
    requestSerialize: serialize_google_pubsub_v1_Topic,
    requestDeserialize: deserialize_google_pubsub_v1_Topic,
    responseSerialize: serialize_google_pubsub_v1_Topic,
    responseDeserialize: deserialize_google_pubsub_v1_Topic,
  },
  // Updates an existing topic. Note that certain properties of a
  // topic are not modifiable.
  updateTopic: {
    path: '/google.pubsub.v1.Publisher/UpdateTopic',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.UpdateTopicRequest,
    responseType: google_pubsub_v1_pubsub_pb.Topic,
    requestSerialize: serialize_google_pubsub_v1_UpdateTopicRequest,
    requestDeserialize: deserialize_google_pubsub_v1_UpdateTopicRequest,
    responseSerialize: serialize_google_pubsub_v1_Topic,
    responseDeserialize: deserialize_google_pubsub_v1_Topic,
  },
  // Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic
  // does not exist. The message payload must not be empty; it must contain
  //  either a non-empty data field, or at least one attribute.
  publish: {
    path: '/google.pubsub.v1.Publisher/Publish',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.PublishRequest,
    responseType: google_pubsub_v1_pubsub_pb.PublishResponse,
    requestSerialize: serialize_google_pubsub_v1_PublishRequest,
    requestDeserialize: deserialize_google_pubsub_v1_PublishRequest,
    responseSerialize: serialize_google_pubsub_v1_PublishResponse,
    responseDeserialize: deserialize_google_pubsub_v1_PublishResponse,
  },
  // Gets the configuration of a topic.
  getTopic: {
    path: '/google.pubsub.v1.Publisher/GetTopic',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.GetTopicRequest,
    responseType: google_pubsub_v1_pubsub_pb.Topic,
    requestSerialize: serialize_google_pubsub_v1_GetTopicRequest,
    requestDeserialize: deserialize_google_pubsub_v1_GetTopicRequest,
    responseSerialize: serialize_google_pubsub_v1_Topic,
    responseDeserialize: deserialize_google_pubsub_v1_Topic,
  },
  // Lists matching topics.
  listTopics: {
    path: '/google.pubsub.v1.Publisher/ListTopics',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.ListTopicsRequest,
    responseType: google_pubsub_v1_pubsub_pb.ListTopicsResponse,
    requestSerialize: serialize_google_pubsub_v1_ListTopicsRequest,
    requestDeserialize: deserialize_google_pubsub_v1_ListTopicsRequest,
    responseSerialize: serialize_google_pubsub_v1_ListTopicsResponse,
    responseDeserialize: deserialize_google_pubsub_v1_ListTopicsResponse,
  },
  // Lists the names of the subscriptions on this topic.
  listTopicSubscriptions: {
    path: '/google.pubsub.v1.Publisher/ListTopicSubscriptions',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest,
    responseType: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse,
    requestSerialize: serialize_google_pubsub_v1_ListTopicSubscriptionsRequest,
    requestDeserialize: deserialize_google_pubsub_v1_ListTopicSubscriptionsRequest,
    responseSerialize: serialize_google_pubsub_v1_ListTopicSubscriptionsResponse,
    responseDeserialize: deserialize_google_pubsub_v1_ListTopicSubscriptionsResponse,
  },
  // Lists the names of the snapshots on this topic.<br><br>
  // <b>ALPHA:</b> This feature is part of an alpha release. This API might be
  // changed in backward-incompatible ways and is not recommended for production
  // use. It is not subject to any SLA or deprecation policy.
  listTopicSnapshots: {
    path: '/google.pubsub.v1.Publisher/ListTopicSnapshots',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest,
    responseType: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse,
    requestSerialize: serialize_google_pubsub_v1_ListTopicSnapshotsRequest,
    requestDeserialize: deserialize_google_pubsub_v1_ListTopicSnapshotsRequest,
    responseSerialize: serialize_google_pubsub_v1_ListTopicSnapshotsResponse,
    responseDeserialize: deserialize_google_pubsub_v1_ListTopicSnapshotsResponse,
  },
  // Deletes the topic with the given name. Returns `NOT_FOUND` if the topic
  // does not exist. After a topic is deleted, a new topic may be created with
  // the same name; this is an entirely new topic with none of the old
  // configuration or subscriptions. Existing subscriptions to this topic are
  // not deleted, but their `topic` field is set to `_deleted-topic_`.
  deleteTopic: {
    path: '/google.pubsub.v1.Publisher/DeleteTopic',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.DeleteTopicRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_pubsub_v1_DeleteTopicRequest,
    requestDeserialize: deserialize_google_pubsub_v1_DeleteTopicRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.PublisherClient = grpc.makeGenericClientConstructor(PublisherService);
// The service that an application uses to manipulate subscriptions and to
// consume messages from a subscription via the `Pull` method or by
// establishing a bi-directional stream using the `StreamingPull` method.
var SubscriberService = exports.SubscriberService = {
  // Creates a subscription to a given topic. See the
  // <a href="/pubsub/docs/admin#resource_names"> resource name rules</a>.
  // If the subscription already exists, returns `ALREADY_EXISTS`.
  // If the corresponding topic doesn't exist, returns `NOT_FOUND`.
  //
  // If the name is not provided in the request, the server will assign a random
  // name for this subscription on the same project as the topic, conforming
  // to the
  // [resource name format](https://cloud.google.com/pubsub/docs/overview#names).
  // The generated name is populated in the returned Subscription object.
  // Note that for REST API requests, you must specify a name in the request.
  createSubscription: {
    path: '/google.pubsub.v1.Subscriber/CreateSubscription',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.Subscription,
    responseType: google_pubsub_v1_pubsub_pb.Subscription,
    requestSerialize: serialize_google_pubsub_v1_Subscription,
    requestDeserialize: deserialize_google_pubsub_v1_Subscription,
    responseSerialize: serialize_google_pubsub_v1_Subscription,
    responseDeserialize: deserialize_google_pubsub_v1_Subscription,
  },
  // Gets the configuration details of a subscription.
  getSubscription: {
    path: '/google.pubsub.v1.Subscriber/GetSubscription',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.GetSubscriptionRequest,
    responseType: google_pubsub_v1_pubsub_pb.Subscription,
    requestSerialize: serialize_google_pubsub_v1_GetSubscriptionRequest,
    requestDeserialize: deserialize_google_pubsub_v1_GetSubscriptionRequest,
    responseSerialize: serialize_google_pubsub_v1_Subscription,
    responseDeserialize: deserialize_google_pubsub_v1_Subscription,
  },
  // Updates an existing subscription. Note that certain properties of a
  // subscription, such as its topic, are not modifiable.
  updateSubscription: {
    path: '/google.pubsub.v1.Subscriber/UpdateSubscription',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest,
    responseType: google_pubsub_v1_pubsub_pb.Subscription,
    requestSerialize: serialize_google_pubsub_v1_UpdateSubscriptionRequest,
    requestDeserialize: deserialize_google_pubsub_v1_UpdateSubscriptionRequest,
    responseSerialize: serialize_google_pubsub_v1_Subscription,
    responseDeserialize: deserialize_google_pubsub_v1_Subscription,
  },
  // Lists matching subscriptions.
  listSubscriptions: {
    path: '/google.pubsub.v1.Subscriber/ListSubscriptions',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest,
    responseType: google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse,
    requestSerialize: serialize_google_pubsub_v1_ListSubscriptionsRequest,
    requestDeserialize: deserialize_google_pubsub_v1_ListSubscriptionsRequest,
    responseSerialize: serialize_google_pubsub_v1_ListSubscriptionsResponse,
    responseDeserialize: deserialize_google_pubsub_v1_ListSubscriptionsResponse,
  },
  // Deletes an existing subscription. All messages retained in the subscription
  // are immediately dropped. Calls to `Pull` after deletion will return
  // `NOT_FOUND`. After a subscription is deleted, a new one may be created with
  // the same name, but the new one has no association with the old
  // subscription or its topic unless the same topic is specified.
  deleteSubscription: {
    path: '/google.pubsub.v1.Subscriber/DeleteSubscription',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_pubsub_v1_DeleteSubscriptionRequest,
    requestDeserialize: deserialize_google_pubsub_v1_DeleteSubscriptionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Modifies the ack deadline for a specific message. This method is useful
  // to indicate that more time is needed to process a message by the
  // subscriber, or to make the message available for redelivery if the
  // processing was interrupted. Note that this does not modify the
  // subscription-level `ackDeadlineSeconds` used for subsequent messages.
  modifyAckDeadline: {
    path: '/google.pubsub.v1.Subscriber/ModifyAckDeadline',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_pubsub_v1_ModifyAckDeadlineRequest,
    requestDeserialize: deserialize_google_pubsub_v1_ModifyAckDeadlineRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Acknowledges the messages associated with the `ack_ids` in the
  // `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages
  // from the subscription.
  //
  // Acknowledging a message whose ack deadline has expired may succeed,
  // but such a message may be redelivered later. Acknowledging a message more
  // than once will not result in an error.
  acknowledge: {
    path: '/google.pubsub.v1.Subscriber/Acknowledge',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.AcknowledgeRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_pubsub_v1_AcknowledgeRequest,
    requestDeserialize: deserialize_google_pubsub_v1_AcknowledgeRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Pulls messages from the server. Returns an empty list if there are no
  // messages available in the backlog. The server may return `UNAVAILABLE` if
  // there are too many concurrent pull requests pending for the given
  // subscription.
  pull: {
    path: '/google.pubsub.v1.Subscriber/Pull',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.PullRequest,
    responseType: google_pubsub_v1_pubsub_pb.PullResponse,
    requestSerialize: serialize_google_pubsub_v1_PullRequest,
    requestDeserialize: deserialize_google_pubsub_v1_PullRequest,
    responseSerialize: serialize_google_pubsub_v1_PullResponse,
    responseDeserialize: deserialize_google_pubsub_v1_PullResponse,
  },
  // Establishes a stream with the server, which sends messages down to the
  // client. The client streams acknowledgements and ack deadline modifications
  // back to the server. The server will close the stream and return the status
  // on any error. The server may close the stream with status `UNAVAILABLE` to
  // reassign server-side resources, in which case, the client should
  // re-establish the stream. Flow control can be achieved by configuring the
  // underlying RPC channel.
  streamingPull: {
    path: '/google.pubsub.v1.Subscriber/StreamingPull',
    requestStream: true,
    responseStream: true,
    requestType: google_pubsub_v1_pubsub_pb.StreamingPullRequest,
    responseType: google_pubsub_v1_pubsub_pb.StreamingPullResponse,
    requestSerialize: serialize_google_pubsub_v1_StreamingPullRequest,
    requestDeserialize: deserialize_google_pubsub_v1_StreamingPullRequest,
    responseSerialize: serialize_google_pubsub_v1_StreamingPullResponse,
    responseDeserialize: deserialize_google_pubsub_v1_StreamingPullResponse,
  },
  // Modifies the `PushConfig` for a specified subscription.
  //
  // This may be used to change a push subscription to a pull one (signified by
  // an empty `PushConfig`) or vice versa, or change the endpoint URL and other
  // attributes of a push subscription. Messages will accumulate for delivery
  // continuously through the call regardless of changes to the `PushConfig`.
  modifyPushConfig: {
    path: '/google.pubsub.v1.Subscriber/ModifyPushConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_pubsub_v1_ModifyPushConfigRequest,
    requestDeserialize: deserialize_google_pubsub_v1_ModifyPushConfigRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets the configuration details of a snapshot.<br><br>
  // <b>ALPHA:</b> This feature is part of an alpha release. This API might be
  // changed in backward-incompatible ways and is not recommended for production
  // use. It is not subject to any SLA or deprecation policy.
  getSnapshot: {
    path: '/google.pubsub.v1.Subscriber/GetSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.GetSnapshotRequest,
    responseType: google_pubsub_v1_pubsub_pb.Snapshot,
    requestSerialize: serialize_google_pubsub_v1_GetSnapshotRequest,
    requestDeserialize: deserialize_google_pubsub_v1_GetSnapshotRequest,
    responseSerialize: serialize_google_pubsub_v1_Snapshot,
    responseDeserialize: deserialize_google_pubsub_v1_Snapshot,
  },
  // Lists the existing snapshots.<br><br>
  // <b>ALPHA:</b> This feature is part of an alpha release. This API might be
  // changed in backward-incompatible ways and is not recommended for production
  // use. It is not subject to any SLA or deprecation policy.
  listSnapshots: {
    path: '/google.pubsub.v1.Subscriber/ListSnapshots',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.ListSnapshotsRequest,
    responseType: google_pubsub_v1_pubsub_pb.ListSnapshotsResponse,
    requestSerialize: serialize_google_pubsub_v1_ListSnapshotsRequest,
    requestDeserialize: deserialize_google_pubsub_v1_ListSnapshotsRequest,
    responseSerialize: serialize_google_pubsub_v1_ListSnapshotsResponse,
    responseDeserialize: deserialize_google_pubsub_v1_ListSnapshotsResponse,
  },
  // Creates a snapshot from the requested subscription.<br><br>
  // <b>ALPHA:</b> This feature is part of an alpha release. This API might be
  // changed in backward-incompatible ways and is not recommended for production
  // use. It is not subject to any SLA or deprecation policy.
  // If the snapshot already exists, returns `ALREADY_EXISTS`.
  // If the requested subscription doesn't exist, returns `NOT_FOUND`.
  // If the backlog in the subscription is too old -- and the resulting snapshot
  // would expire in less than 1 hour -- then `FAILED_PRECONDITION` is returned.
  // See also the `Snapshot.expire_time` field. If the name is not provided in
  // the request, the server will assign a random
  // name for this snapshot on the same project as the subscription, conforming
  // to the [resource name format](https://cloud.google.com/pubsub/docs/overview#names).
  // The generated
  // name is populated in the returned Snapshot object. Note that for REST API
  // requests, you must specify a name in the request.
  createSnapshot: {
    path: '/google.pubsub.v1.Subscriber/CreateSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.CreateSnapshotRequest,
    responseType: google_pubsub_v1_pubsub_pb.Snapshot,
    requestSerialize: serialize_google_pubsub_v1_CreateSnapshotRequest,
    requestDeserialize: deserialize_google_pubsub_v1_CreateSnapshotRequest,
    responseSerialize: serialize_google_pubsub_v1_Snapshot,
    responseDeserialize: deserialize_google_pubsub_v1_Snapshot,
  },
  // Updates an existing snapshot.<br><br>
  // <b>ALPHA:</b> This feature is part of an alpha release. This API might be
  // changed in backward-incompatible ways and is not recommended for production
  // use. It is not subject to any SLA or deprecation policy.
  // Note that certain properties of a snapshot are not modifiable.
  updateSnapshot: {
    path: '/google.pubsub.v1.Subscriber/UpdateSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest,
    responseType: google_pubsub_v1_pubsub_pb.Snapshot,
    requestSerialize: serialize_google_pubsub_v1_UpdateSnapshotRequest,
    requestDeserialize: deserialize_google_pubsub_v1_UpdateSnapshotRequest,
    responseSerialize: serialize_google_pubsub_v1_Snapshot,
    responseDeserialize: deserialize_google_pubsub_v1_Snapshot,
  },
  // Removes an existing snapshot. <br><br>
  // <b>ALPHA:</b> This feature is part of an alpha release. This API might be
  // changed in backward-incompatible ways and is not recommended for production
  // use. It is not subject to any SLA or deprecation policy.
  // When the snapshot is deleted, all messages retained in the snapshot
  // are immediately dropped. After a snapshot is deleted, a new one may be
  // created with the same name, but the new one has no association with the old
  // snapshot or its subscription, unless the same subscription is specified.
  deleteSnapshot: {
    path: '/google.pubsub.v1.Subscriber/DeleteSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_pubsub_v1_DeleteSnapshotRequest,
    requestDeserialize: deserialize_google_pubsub_v1_DeleteSnapshotRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Seeks an existing subscription to a point in time or to a given snapshot,
  // whichever is provided in the request.<br><br>
  // <b>ALPHA:</b> This feature is part of an alpha release. This API might be
  // changed in backward-incompatible ways and is not recommended for production
  // use. It is not subject to any SLA or deprecation policy.
  seek: {
    path: '/google.pubsub.v1.Subscriber/Seek',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1_pubsub_pb.SeekRequest,
    responseType: google_pubsub_v1_pubsub_pb.SeekResponse,
    requestSerialize: serialize_google_pubsub_v1_SeekRequest,
    requestDeserialize: deserialize_google_pubsub_v1_SeekRequest,
    responseSerialize: serialize_google_pubsub_v1_SeekResponse,
    responseDeserialize: deserialize_google_pubsub_v1_SeekResponse,
  },
};

exports.SubscriberClient = grpc.makeGenericClientConstructor(SubscriberService);
