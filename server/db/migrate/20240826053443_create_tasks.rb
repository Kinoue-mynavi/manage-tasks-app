class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description
      # t.string :status, null: false
      # t.boolean :is_completed, null: false, default: false
      # t.datetime :expired_at,

      t.timestamps

    #   t.references :user
    end
  end
end
