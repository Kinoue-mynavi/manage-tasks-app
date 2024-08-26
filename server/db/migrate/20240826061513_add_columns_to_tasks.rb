class AddColumnsToTasks < ActiveRecord::Migration[7.1]
  def change
    add_column :tasks, :status, :string, null: false
    add_column :tasks, :is_completed, :boolean, null: false
    add_column :tasks, :expired_at, :datetime
    add_reference :tasks, :user, null: false, foreign_key: true
  end
end
