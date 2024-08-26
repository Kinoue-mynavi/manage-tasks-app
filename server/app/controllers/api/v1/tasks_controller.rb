module Api
  module V1
    class TasksController < ApplicationController
      before_action :set_task, only: %i[show]
      # before_action :authenticate_user!

      def index
        render json: { data: Task.all }, status: :ok
      end

      def show
        render json: { data: @task }, status: :ok
      end

      def create
        task = Task.new(task_params)

        if task.save
          render json: task, status: :created
        else
          render json: task.errors, status: :unprocessable_entity
        end
      end

      private

        def set_task
          @task = Task.find(params[:id])
        end

        def task_params
          params.require(:task).permit(
            :title,
            :description,
            :status,
            :is_completed,
            :expired_at,
          ).merge(user_id: current_api_v1_user.id)
        end
    end
  end
end