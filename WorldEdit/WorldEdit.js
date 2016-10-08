var pos1=[0, 0, 0];
var pos2=[0, 0, 0];

function useItem(x, y, z, i, b, s, id, bd)
{
if(i==271)
{
pos1[0]=x;
pos1[1]=y;
pos1[2]=z;
clientMessage("pos1 selected. X: "+x+" Y: "+y+" Z: "+z);
}
}

function destroyBlock(x, y, z, side)
{
if(getCarriedItem() == 271)
{
pos2[0]=x;
pos2[1]=y;
pos2[2]=z;
clientMessage("pos2 selected. X: "+x+" Y: "+y+" Z: "+z);
preventDefault();
}
}

function procCmd(cmd)
{
var bcount=0;
var startX=Math.min(pos1[0], pos2[0]);
var endX=Math.max(pos1[0], pos2[0]);
var startY=Math.min(pos1[1], pos2[1]);
var endY=Math.max(pos1[1], pos2[1]);
var startZ=Math.min(pos1[2], pos2[2]);
var endZ = Math.max(pos1[2], pos2[2]);

var Data = cmd.split(" ");
if(Data[0]=="fill")
{
for(var x=startX;x <= endX;x++)
{
for(var y=startY;y <= endY;y++)
{
for(var z=startZ;z <= endZ;z++)
{
setTile(x, y, z, Data[1], Data[2]);

bcount++;
}
}
}
clientMessage(bcount+" Block changed.");
}
}
