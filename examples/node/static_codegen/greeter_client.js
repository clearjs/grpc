/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var {JWT} = require('google-auth-library');
var messages = require('./route_guide/google/pubsub/v1/pubsub_pb');
var services = require('./route_guide/google/pubsub/v1/pubsub_grpc_pb');
var keys = require('./gcloud-config-test.secret.json');


var grpc = require('grpc');

function main() {
  const client = new JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/cloud-platform'],
  );

  var ssl_creds = grpc.credentials.createSsl();
  (new GoogleAuth()).getApplicationDefault(function(err, auth) {
    var call_creds = grpc.credentials.createFromGoogleCredential(auth);
    var combined_creds = grpc.credentials.combineChannelCredentials(ssl_creds, call_creds);
    //var stub = new helloworld.Greeter('greeter.googleapis.com', combined_credentials);
    var client = new services.PublisherClient('pubsub.googleapis.com:443', combined_credentials);
    var request = new messages.ListTopicsRequest();
    var project;
    if (process.argv.length >= 3) {
      project = process.argv[2];
    } else {
      project = 'projects/pubsub-elixir';
    }
    request.setProject(project);
    client.listTopics(request, function(err, response) {
      console.log('Error: ', err)
      !err && console.log('Topics:', response.getMessage());
    });
  });
}

main();
