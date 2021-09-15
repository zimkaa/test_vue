<template>
  <div class="KafkaRouting">
    <h1>Kafka Routing Table</h1>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>KafkaTopicIn</th>
            <th>KafkaTopicOut</th>
            <th>ErrorsTopic</th>
            <th>PipelineTopicIn</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                id="kafka_in_input"
                class="form-control"
                placeholder="*.source:EvTypeIfSupported"
              />
            </td>
            <td>
              <input
                id="kafka_out_input"
                class="form-control"
                placeholder="*.sink"
              />
            </td>
            <td>
              <input
                id="errors_input"
                class="form-control"
                placeholder="*.errors"
              />
            </td>
            <td>
              <input
                id="pipeline_in_input"
                class="form-control"
                placeholder="fabrique.*.in"
              />
            </td>
            <td><button class="btn btn-primary">Add</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<style>

#pipeline_in_input {
  width: 100%;
  font-size: 12px;
  margin-right: 5px;
  text-align: center;
  color: #2c3e50;
}

#kafka_out_input {
  width: 100%;
  font-size: 12px;
  margin-right: 5px;
  text-align: center;
  color: #2c3e50;
}

#errors_input {
  width: 100%;
  font-size: 12px;
  margin-right: 5px;
  text-align: center;
  color: #2c3e50;
}

#kafka_in_input {
  width: 100%;
  font-size: 12px;
  margin-right: 5px;
  text-align: center;
  color: #2c3e50;
}

</style>


