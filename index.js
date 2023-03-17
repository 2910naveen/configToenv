const obj ={
    "odbConfigOutages": {
      "user": "nsp_nrw",
      "password": "zaq1$RFV",
      "poolMax": 3,
      "poolIncrement": 1,
      "queueTimeout": 0,
      "connectString": "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = njbbnocpd1v.nss.vzwnet.com)(PORT = 1521))(CONNECT_DATA =(SID= ADM)))"
    },
    "odbConfigNMCDBOutages": {
      "user": "NMCDBREAD",
      "password": "vzwR3ad",
      "poolMax": 1,
      "poolIncrement": 1,
      "queueTimeout": 0,
      "connectString": "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = njbbnocdd1-ipv4.nss.vzwnet.com)(PORT = 1521))(CONNECT_DATA =(SID= nmcdb)))"
    },
    "url": "https://nspdev.nss.vzwnet.com/nsp/outages/outagemanagement",
    "app": {
      "port": 8001,
      "milestoneUpdateFrequency": 60000,
      "retryTimeout": 60000,
      "retryTimeoutJBPM": 420000,
      "caloeZipCodeUpdates": 1000000,
      "authHeader": "Basic V0lOLVZaV05FVFxTLWlvcDp3b1JEMjk1IQ==",
      "authEnabled": false,
      "autoUpdateTechManulEtrInterval": 600000,
      "gcInterval": 3600000,
      "MDNSRestoreInterval": 800000,
      "MDNSStep4List3": 800000,
      "MDNSStep2List2": 3600000,
      "autoUpdateTimelineInterval": 850000,
      "oracleRefreshInterval": 900000
    },
    "Database": {
      "NSP": {
        "mongo": {
          "connectString": "mongodb://nspuatuser:nspuat123456@njbbnspsd2v.nss.vzwnet.com:27009,txslnspsd2v.nss.vzwnet.com:27009,txslnspsd3v.nss.vzwnet.com:27009/nspdb?replicaSet=rsNSPSTG&readPreference=primary",
          "dbName": "nspdb",
          "replicaSet": "rsNSPSTG",
          "OC_OUTAGE": "OC_Outage",
          "APP_CONFIG": "appconfig",
          "OUTAGE_ZIP_CODES_AFFECTED": "OUTAGE_ZIPCODE",
          "OC_RESOLUTION": "OC_Resolution",
          "OC_ENODEB": "OC_Enodeb",
          "OC_MDNS": "OC_MDNS",
          "OC_HISTORICAL_FIFTEEN_MDN": "oc_historical_fifteen_mdn",
          "OC_HISTORICAL_MDN": "oc_historical_mdn",
          "OC_MDNS_RESTORED_IMPACTED": "OC_MDNS_Restored_Impacted",
          "OC_IVR_TIMELINE": "OC_IVR_Timeline",
          "OUTAGE_LOG": "Outage_Log",
          "OC_CUSTOMER_STATUS_MAPPING": "OC_Customer_Status_Mapping",
          "OUTAGE_REMINDER_EMAILS": "Outage_Reminder_Emails",
          "DATA_CLEANER": "DATA_CLEANER",
          "SOURCE_MONGODB": "MONGODB",
          "SOURCE_POSTGRESQL": "POSTGRESQL",
          "OC_MARKET_SUBMARKET": "OC_Market_SubMarket",
          "OC_MARCL_REPORT": "OC_MARCL_Report",
          "OC_ATOLL_CITY_ST_ZIP": "OC_ATOLL_CITY_ST_ZIP",
          "OC_LOCATION_CITY_MAPPING": "OC_Location_City_Mapping",
          "COUNTER": "counters"
        }
      },
      "NSPEUAT": {
        "nspemongodb": {
          "connectString": "mongodb://nspe_user:8DgZ#Q9M@caronspsd3.nss.vzwnet.com:27009,caronspsd2.nss.vzwnet.com:27009,caronspsd1.nss.vzwnet.com:27009/nspeuat",
          "dbName": "nspeuat",
          "replicaSet": "rsNSPEUAT"
        }
      }
    },
    "AuthService": {
      "url": "https://nspdev.nss.vzwnet.com:8080/auth/token/verify"
    },
    "GeogriddingService": {
      "url": "https://nspdev.nss.vzwnet.com:8080/geogridding"
    },
    "ivr": {
      "user": "ndlprod",
      "key": "XjcgAycrvbEjcNhxI5KGrHYSFt59ergtdr7V79Tg",
      "locationNew": "https://njbbnocp1vm.win.eng.vzwnet.com:9443/nmc/outagechar/mainapi.cfc?method=get_octlocations",
      "location": "https://svcs-nspdev.nss.vzwnet.com:9010/oct/oc/getlocations"
    },
    "email": {
      "url": "https://oc.vh.vzwnet.com/common/sendEmail"
    },
    "ETRUpdate": {
      "duration": 62
    },
    "npi": {
      "host": "ey9omprna007.vzbi.com",
      "port": 7050,
      "path": "/npi/ivr/events/outage"
    },
    "ndl": {
      "host": "ndl-nifi-api.nss.vzwnet.com",
      "port": 10750,
      "path": "/ndl/ivr/events/outage"
    },
    "nrb": {
      "url": "https://ple-impact.vzbi.com/itw-jbpmtwo-rs/itw-rs/process-manager/jbpm2/start/jpdl/nrb_noc_outage",
      "fivegticket": "https://ple-impact.vzbi.com/itw-jbpmtwo-rs/itw-rs/process-manager/jbpm2/start/jpdl/nrb_tkt"
    },
    "nsp": {
      "url": "https://njbbnocp1vm.win.eng.vzwnet.com:9443",
      "locationUrl": "https://nj51nreda5v.nss.vzwnet.com:8001",
      "outageMapUrl": "https://nj51nreda5v.nss.vzwnet.com:9082"
    },
    "locations": {
      "url": "https://nj51nresa6v.nss.vzwnet.com:9010"
    },
    "log": {
      "db": "mongodb://nspuser:nsp123456@txslnspdd2v.nss.vzwnet.com:27009/NSP",
      "collection": "Log"
    },
    "LogService": {
      "url": "https://nspdev.nss.vzwnet.com:8080/log/logs"
    },
    "userService": {
      "url": "http://localhost/user/"
    },
    "iopService": {
      "url": "http://txsliopsa1v.nss.vzwnet.com:8080",
      "correlationUrl": "http://njbbmomlpa9v.nss.vzwnet.com:5045/mom/getAnchorNode",
      "gatewayUrl": "https://nssapigateway.vh.vzwnet.com/mom/v1.0.0/mom/getAnchorNode",
      "host": "https://nssapigateway.vh.vzwnet.com",
      "path": "/mom/v1.0.0/mom/getAnchorNode"
    },
    "nssGateway": {
      "nssGatewayAuthBasicToken": "ZTA5TTJkSUF3UWpzaDNzWUpJdXVqQXZlWWxJYTpqRmtMRFJmZTlxempnQlFTVDgwQmNWZmJ0eGth",
      "url": "https://nssapigateway.vh.vzwnet.com",
      "path": "/token"
    },
    "postgre": {
      "hostname": "txslnspdd1v.nss.vzwnet.com",
      "dbName": "nspdb",
      "port": 5432,
      "username": "outage_user",
      "password": "T9g%Hrsx",
      "table": "outage.outage_timestamp_log",
      "tableDetails": "outage.outage_detail"
    },
    "serviceName": "ivrservice",
    "oc": {
      "baseUrl": "https://oc.vh.vzwnet.com"
    },
    "apmService": {
      "serviceUrl": "http://njbbnspdm2v.nss.vzwnet.com:30010"
    },
    "vmb": {
      "url": "https://svcs-nspdev.nss.vzwnet.com:10203",
      "TOPIC": {
        "ENODEB": 6,
        "MDN": 5,
        "START": 7,
        "RESOLVE": 5
      }
    },
    "marcl": {
      "token": "Q0FMT0VTVXNlcjo2ezRkRkNcOFAuS3V1OVh+ ",
      "baseUrl": "https://api-marcl-dev.verizon.com",
      "caloes": "/api/nspatol"
    },
    "druid": {
      "url": "https://druid.vh.vzwnet.com:8072/druid/v2/?pretty",
      "vgrid": "https://svcs-nspuat.vh.vzwnet.com:8005/vgrid",
      "edgeAiUrl": "https://edgeai-rocklin.nss.vzwnet.com/edgeai-api/edgeai/druid-proxy/druid/v2/sql",
      "edgeAiAuthToken": "edgeaieyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJhcGljb29yZGluYXRvciIsInN1YiI6InNvbWF2bWEiLCJpYXQiOjE2MTkxOTM3MzAsImV4cCI6MTYyMDE5MzcyOSwiZW52aXJvbm1lbnRJZCI6MTUsInVzZXJOYW1lIjoic29tYXZtYSIsInVzZXJJZCI6NzF9.JUKGwrJOtM5iYR8D1ptl-r5bS3I3Ps92h3zf7eYSLuhEkwPfZlYlF004IrqXNgoSu0VQan52pkPvxVvYjcYb1g"
    }
  }


function configToEnv(obj,str="")
{
    if(typeof obj !== "object")
    {
        return;
    }
    const objkeys = Object.keys(obj);
    for(let i=0;i<objkeys.length;i++)
    {
       if(Object.keys(obj[objkeys[i]]).length>0)
       {
           if(str === "")
           {
              str = str + objkeys[i]; 
           }
           else
           {
               str = str+"_"+objkeys[i];
           }
           configToEnv(obj[objkeys[i]],str);
       }
       if(typeof obj[objkeys[i]] !== "object")
       {
        console.log(str+" "+obj[objkeys[i]]);   
       }
       str = str.substring(0,str.lastIndexOf('_'));
    }
}
configToEnv(obj,"");
