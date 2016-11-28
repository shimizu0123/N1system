package casestudy;
import java.sql.Connection;
import java.sql.SQLException;

/**
 * DBに各DB_Itemを格納するクラス
 */
public class InsertDB {

	/**
	 * DBにDB_Item_CallSignを格納する
	 * @param DB_Item_CallSign
	 */
	public static void InsertCallSign(DB_Item_CallSign callSign) {

		Connection con = null;

		try{

			con = ConnectionManager.getConnection();
			System.out.println("DB接続完了");

			CallSignDAO InsCallsign =new CallSignDAO(con);
			InsCallsign.insertCallSign(callSign);

			System.out.println("*** 以下の内容を登録しました ***");
			System.out.println(callSign.getModeSAddress() + ", " + callSign.getCallSign());

		}catch (SQLException e) {
			System.out.println("登録に失敗しました");
			e.printStackTrace();
		}

		try {
			if(con != null){
				con.close();
				System.out.println("DBクローズ完了");
			}
		}catch(SQLException e) {
				e.printStackTrace();
		}



	}

	/**
	 * DBにDB_Item_Velocityを格納する
	 * @param DB_Item_Velocity
	 */
	public static void insertVelocity(DB_Item_Velocity velocity) {

		Connection con = null;

		try{

			con = ConnectionManager.getConnection();
			System.out.println("DB接続完了");

			VelocityDAO InsVelocity =new VelocityDAO(con);
			InsVelocity.insertVelocity(velocity);

			System.out.println("*** 以下の内容を登録しました ***");
			System.out.println(	velocity.getModeSAddress() + ", "
								+ velocity.getVelocity().getS_Vr() + ", "
								+ velocity.getVelocity().getVr() + ", "
								+ velocity.getVelocity().getDeg() + ", "
								+ velocity.getVelocity().getVel());

		}catch (SQLException e) {
			System.out.println("登録に失敗しました");
			e.printStackTrace();
		}

		try {
			if(con != null){
				con.close();
				System.out.println("DBクローズ完了");
			}
		} catch(SQLException e) {
				e.printStackTrace();
		}

	}

	/**
	 * DBにDB_Item_PlanePositionを格納する
	 * @param DB_Item_PlanePosition
	 */
	public static void insertPlanePosition(DB_Item_PlanePosition planePosition) {

		Connection con = null;

		try{

			con = ConnectionManager.getConnection();
			System.out.println("DB接続完了");

			PositionDAO InsPosition =new PositionDAO(con);
			InsPosition.insertPosition(planePosition);

			System.out.println("*** 以下の内容を登録しました ***");
			System.out.println(	planePosition.getModeSAddress() + ", "
								+ planePosition.getPlanePosition().getLon() + ", "
								+ planePosition.getPlanePosition().getLat() + ", "
								+ planePosition.getPlanePosition().getAlt());

		}catch (SQLException e) {
			System.out.println("登録に失敗しました");
			e.printStackTrace();
		}

		try {
			if(con != null){
				con.close();
				System.out.println("DBクローズ完了");
			}
		}catch(SQLException e) {
				e.printStackTrace();
		}

	}

}
