class Api::V1::Auth::SessionsController < ApplicationController
  def index
    if api_v1_user_signed_in?
      render json: { is_login: true, data: current_api_v1_user }
    else
      render json: { is_login: false, message: "ユーザーが存在しません" }
    end
  end
end
