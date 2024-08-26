module Api
  module V1
    class TasksController < ApplicationController
      def index
        render json: {status: 'SUCCESS', message: 'Loaded!!'}, status: :ok
      end
    end
  end
end